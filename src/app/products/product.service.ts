import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { store, setProducts } from './../store';

import { IProduct, IGetProduct } from './product';

@Injectable()
export class ProductService {
  private productUrl = './api/products/products.json';
  
  constructor(private http: HttpClient) {}
  
  getProducts(): void {
    this.http.get<IProduct[]>(this.productUrl)
      .toPromise()
      .then((products) => {
        store.dispatch(setProducts(products));
      });
  }
  
  private handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }
}