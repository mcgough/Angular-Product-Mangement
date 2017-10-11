import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { IProduct, IGetProduct } from './product';

@Injectable()
export class ProductService {
  private productUrl = './api/products/products.json';
  
  constructor(private http: HttpClient) {}
  
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
      .catch(this.handleError);
  }
  getProduct(id: number): Promise<Object> {
    return this.http.get(this.productUrl)
      .toPromise()
      .then((response: IProduct[]) => {
        const payload = response.reduce((payload: IGetProduct, product: IProduct, index: number) => {
          const productId: number = product.productId;
          if (productId === id) {
            payload.product = product;
            payload.next = response[index + 1];
            payload.previous = response[index - 1];
            if (payload.next === undefined) {
              payload.next = response[0];
            }
            if (payload.previous === undefined) {
              payload.previous = response[response.length - 1];
            }
          }
          return payload;
        }, {})
        return payload;
      });
  }
  
  private handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }
}