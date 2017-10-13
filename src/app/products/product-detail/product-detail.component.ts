import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { store, setSelectedProduct } from '../../store';
import 'rxjs/add/operator/filter';

import { IProduct, IGetProduct } from '../product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct;
  quantity: number;
  next: IProduct;
  previous: IProduct;
  modalUrl: string = '';
  modalName: string = '';
  
  constructor (private router: Router, private route: ActivatedRoute) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => this.getProduct());
  }
  
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    store.dispatch(setSelectedProduct(id));
    const allState = store.getState();
    this.product = allState.selectedProduct;
    this.next = allState.next;
    this.previous = allState.previous;
    this.quantity = 1;  
  }
  handleAddQuantityClick(): void {
    if (this.quantity < this.product.quantity) {
      this.quantity++;
    }
  }
  handleMinusQuantityClick(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  handleImageClick(url: string, name: string): void {
    this.modalUrl = url;
    this.modalName = name;
  }
  clearModalUrl(): void {
    this.modalUrl = '';
    this.modalName = '';
  }
}
