import { IProduct } from '../products/product';

export interface IAppState {
  products: IProduct[],
  filteredProducts: IProduct[],
}