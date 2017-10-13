import { IProduct } from '../products/product';
import { IAppState } from './IAppState';
import { FILTER_PRODUCTS } from './actions';

const products = [
  {
    "productId": 1,
    "productName": "New Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  },
  {
    "productId": 2,
    "productName": "New Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
  },
  {
    "productId": 5,
    "productName": "New Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2016",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
  },
];

const initialState: IAppState = {
  products,
  filteredProducts: products,
};

function filterProducts(state, action) : IAppState {
  return Object.assign({}, state, {
    filteredProducts: state.products.filter(product => product.productName.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1),
  });
}

export const reducer = (state = initialState, action) => { 
  switch(action.type) {
    case FILTER_PRODUCTS:
      return filterProducts(state, action);
    default:
      return state;
  } 
};
