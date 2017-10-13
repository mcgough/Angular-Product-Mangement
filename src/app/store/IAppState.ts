import { IProduct } from '../products/product';

export interface IAppState {
  products: IProduct[];
  filteredProducts: IProduct[];
  selectedProduct: IProduct;
  next: IProduct;
  previous: IProduct;
  cart: IProduct[];
}