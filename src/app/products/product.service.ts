import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/find';

import { IProduct } from './product';

@Injectable()
export class ProductService {
  private productUrl = './api/products/products.json';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
      .catch(this.handleError);
  }
  getProduct(id: number): Observable<IProduct> {
    console.log('getProduct', id);
    return this.http.get(this.productUrl)
      .find(product => (product as IProduct).productId === id);
  }
  private handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }
}