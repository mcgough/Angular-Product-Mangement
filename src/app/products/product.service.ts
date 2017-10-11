import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { IProduct } from './product';

@Injectable()
export class ProductService {
  private productUrl = './api/products/products.json';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
      .catch(this.handleError);
  }
  getProduct(id: number) {
    return this.http.get(this.productUrl)
      .toPromise()
      .then((products: IProduct[]) => {
        const [product]: IProduct[] = (products as IProduct[]).filter(product => product.productId === id);
        return product;
      });
  }
  private handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }
}