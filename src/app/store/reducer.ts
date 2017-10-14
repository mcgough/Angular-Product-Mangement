import { IProduct } from '../products/product';
import { IAppState } from './IAppState';
import {
  SET_PRODUCTS,
  FILTER_PRODUCTS,
  SET_SELECTED_PRODUCT,
  ADD_PRODUCT_TO_CART,
  SET_CART_MODAL_FLAG,
} from './actions';

const initialState: IAppState = {
  products: [],
  filteredProducts: [],
  product: null,
  next: null,
  previous: null,
  cart: [],
  cartModalFlag: false,
};

function setProducts(state, action) : IAppState {
  const storedState = JSON.parse(localStorage.getItem('state'));
  const { products } = action;
  let newState = assign(state, { products, filteredProducts: products});
  // if (Object.prototype.hasOwnProperty.call(storedState, 'products')) {
  //   newState = storedState;
  // }
  setLocalStorage(JSON.stringify(newState));
  return newState;
}

function filterProducts(state, action) : IAppState {
  return Object.assign({}, state, {
    filteredProducts: state.products.filter(product => product.productName.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1),
  });
}

function setSelectedProduct(state, action) : IAppState {
  const { product, next, previous } = getSelectedPayload(state.products, action.id);
  return Object.assign({}, state, {
    product,
    next,
    previous,
  });
}

function addProductToCart(state, action) : IAppState {
  const cart = state.cart.slice();
  const products = state.products.slice();
  cart.push(action.product);
  return Object.assign({}, state, {
    cart,
    cartModalFlag: true,
    products: setNewProductQuantity(products, action.product),
  })
}

function setCartModalFlag(state, action) : IAppState {
  return Object.assign({}, state, {
    cartModalFlag: action.flag,
  })
}

function setNewQuantity(state, action) : IAppState {
  return state;
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRODUCTS:
      return setProducts(state, action);
    case FILTER_PRODUCTS:
      return filterProducts(state, action);
    case SET_SELECTED_PRODUCT:
      return setSelectedProduct(state, action);
    case ADD_PRODUCT_TO_CART:
      return addProductToCart(state, action);
    case SET_CART_MODAL_FLAG:
      return setCartModalFlag(state, action);
    default:
      return state;
  } 
};

const setNewProductQuantity = (collection: IProduct[], product: IProduct) => {
  const { productId: id, quantity } = product;
  const payload = collection.map((item) => {
    if (item.productId === id) {
      item.quantity -= quantity;
    }
    return item;
  });
  return payload;
}

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

function setLocalStorage(state) {
  localStorage.setItem('state', state);
}

function assign(state, props) {
  return Object.assign({}, state, props);
}
