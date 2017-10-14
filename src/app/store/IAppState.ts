import { IProduct } from '../products/product';

export interface IAppState {
  products: IProduct[];
  filteredProducts: IProduct[];
  product: IProduct;
  next: IProduct;
  previous: IProduct;
  cart: IProduct[];
  cartModalFlag: boolean;
}