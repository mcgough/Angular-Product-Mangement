import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../products/product';
import { store, setCartModalFlag } from '../../store';

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
    if (this.products) {
      const count = this.products.reduce((total, product) => {
        total += product.quantity;
        return total;
      }, 0);
      return count;
    }
    return 0;
  }
  get priceTotal(): number {
    if (this.products) {
      const total = this.products.reduce((total, product) => {
        total += (product.price * product.quantity);
        return total;
      }, 0);
      return total;
    }
    return 0;
  }

  ngOnInit(): void {
    store.subscribe(() => {
      this.updateCartState()
    });
  }

  updateCartState(): void {
    const allState = store.getState();
    this.products = allState.cart;
    this.isOpen = allState.cartModalFlag;
  }
  openModal(): void {
    store.dispatch(setCartModalFlag(true));
  }
  closeModal(): void {
    store.dispatch(setCartModalFlag(false));
  }
}
