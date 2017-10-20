import { IProduct } from '../products/product';
import { IDialog } from '../shared/dialog/IDialog';

export interface IAppState {
  products: IProduct[];
  filteredProducts: IProduct[];
  product: IProduct;
  next: IProduct;
  previous: IProduct;
  cart: IProduct[];
  cartModalFlag: boolean;
  dialogs: IDialog[];
}