import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../products/product';
import { store } from '../../store';

@Component({
  selector: 'pm-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent implements OnInit {

  constructor() { }

  products: IProduct[];
  isOpen: boolean;
  get productsCount(): number {
    const count = this.products.reduce((total, product) => {
      total += product.quantity;
      return total;
    }, 0);
    return count;
  }
  get priceTotal(): number {
    const total = this.products.reduce((total, product) => {
      total += (product.price * product.quantity);
      return total;
    }, 0);
    return total;
  }

  ngOnInit() {
    store.subscribe(() => {
      this.updateCartState()
    });
  }

  updateCartState(): void {
    const allState = store.getState();
    this.products = allState.cart;
    this.isOpen = allState.cartModalFlag;
    this.openModal();
  }
  openModal(): void {
    this.isOpen = true;
  }
  closeModal(): void {
    this.isOpen = false;
  }
}
