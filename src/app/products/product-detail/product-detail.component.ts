import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { store, setSelectedProduct, addProductToCart } from '../../store';
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
    const { products } = store.getState();
    
    //TODO: refactor
    if (!products.length) {
      setTimeout(() => {
        this.getProduct();
      }, 1000);
    } else {
      this.getProduct();
    }

  }

  getProduct(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    store.dispatch(setSelectedProduct(id));
    const { product, next, previous } = store.getState();
    this.product = product;
    this.next = next;
    this.previous = previous;
    this.quantity = 1;  
  }
  handleAddToCart(): void {
    if (!this.inventoryCheck()) return;
    const product = Object.assign({}, this.product, {
      quantity: this.quantity,
    });
    this.quantity = 1;
    store.dispatch(addProductToCart(product));
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
  inventoryCheck(): boolean {
    if (this.quantity > this.product.quantity) {
      this.onInventoryExceed();
      return false;
    }
    return true;
  }
  onInventoryExceed(): void {
    this.quantity = this.product.quantity;
    alert('Order exceeds inventory');
  }
}
