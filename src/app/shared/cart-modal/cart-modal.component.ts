import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../products/product';
import { store, setCartModalFlag, removeProductFromCart } from '../../store';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'pm-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent implements OnInit {

  constructor(private router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => this.closeModal());
  }

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
  removeProduct(product: IProduct): void {
    store.dispatch(removeProductFromCart(product));
  }
  openModal(): void {
    this.isOpen ? store.dispatch(setCartModalFlag(false)) : store.dispatch(setCartModalFlag(true));
  }
  closeModal(): void {
    store.dispatch(setCartModalFlag(false));
  }
}
