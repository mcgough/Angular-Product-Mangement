import { IProduct } from '../products/product';
import { IAppState } from './IAppState';
import {
  FILTER_PRODUCTS,
  SET_SELECTED_PRODUCT,
  ADD_PRODUCT_TO_CART,
  SET_CART_MODAL_FLAG,
} from './actions';


import { find } from 'lodash';

const products = [
  {
    "productId": 1,
    "productName": "New Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "quantity": 3,
    "category": "New",
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
    "quantity": 5,
    "category": "New",
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
    "quantity": 0,
    "category": "New",
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
  },
];

const initialState: IAppState = {
  products,
  filteredProducts: products,
  selectedProduct: null,
  next: null,
  previous: null,
  cart: [],
  cartModalFlag: false,
};

function filterProducts(state, action) : IAppState {
  return Object.assign({}, state, {
    filteredProducts: state.products.filter(product => product.productName.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1),
  });
}

function setSelectedProduct(state, action) : IAppState {
  const { product, next, previous } = getSelectedPayload(state.products, action.id);
  return Object.assign({}, state, {
    selectedProduct: product,
    next,
    previous,
  });
}

function addProductToState(state, action) : IAppState {
  const cart = state.cart.slice();
  cart.push(action.product);
  return Object.assign({}, state, {
    cart: cart,
    cartModalFlag: true,
  })
}

function setCartModalFlag(state, action) : IAppState {
  console.log(action);
  return Object.assign({}, state, {
    cartModalFlag: action.flag,
  })
}

function setNewQuantity(state, action) : IAppState {
  return state;
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FILTER_PRODUCTS:
      return filterProducts(state, action);
    case SET_SELECTED_PRODUCT:
      return setSelectedProduct(state, action);
    case ADD_PRODUCT_TO_CART:
      return addProductToState(state, action);
    case SET_CART_MODAL_FLAG:
      return setCartModalFlag(state, action);
    default:
      return state;
  } 
};

function getSelectedPayload(products, id: number) {
  const payload = products.reduce((payload: any, product: IProduct, index: number) => {
    const productId: number = product.productId;
    if (productId === id) {
      payload.product = product;
      payload.next = products[index + 1];
      payload.previous = products[index - 1];
      if (payload.next === undefined) {
        payload.next = products[0];
      }
      if (payload.previous === undefined) {
        payload.previous = products[products.length - 1];
      }
    }
    return payload;
  }, {})
  return payload;
}
