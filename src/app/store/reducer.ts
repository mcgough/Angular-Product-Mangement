import { IProduct } from '../products/product';
import { IAppState } from './IAppState';
import {
  SET_PRODUCTS,
  FILTER_PRODUCTS,
  SET_SELECTED_PRODUCT,
  SUBMIT_PRODUCT_REVIEW,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
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
  const { products } = action;
  const storedState = JSON.parse(localStorage.getItem('state'));
  if (storedState && Object.prototype.hasOwnProperty.call(storedState, 'products')) {
    storedState.cartModalFlag = false;
    return storedState;
  }
  return assign(state, { products, filteredProducts: products});
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
  cart.unshift(action.product);
  const updatedState = Object.assign({}, state, {
    cart,
    cartModalFlag: true,
    products: setNewProductQuantity(products, action.product),
  });
  setLocalStorage(updatedState);
  return updatedState;
}

function removeProductFromCart(state, action) : IAppState {
  const { product: removedProduct } = action;
  const { quantity } = removedProduct;
  const cart = state.cart.slice();
  const products = state.products.slice();
  removedProduct.quantity = quantity * -1;
  const updatedState = Object.assign({}, state, {
    cart: cart.filter(product => product.productId !== removedProduct.productId),
    products: setNewProductQuantity(products, removedProduct),
  });
  setLocalStorage(updatedState);
  return updatedState;
}

function submitProductReview(state, action) : IAppState {
  const { review } = action;
  const products = state.products.slice();
  const updatedProducts = products.map((product) => {
    if (product.productId === review.product) {
      product.reviews.unshift(review);
      product.starRating = (product.reviews.reduce((sum, review) => { sum += review.starRating; return sum }, 0)) / product.reviews.length;
    }
    return product;
  });
  const updatedState = Object.assign(state, { products: updatedProducts });
  setLocalStorage(updatedState);
  return updatedState;
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
    case REMOVE_PRODUCT_FROM_CART:
      return removeProductFromCart(state, action);
    case SUBMIT_PRODUCT_REVIEW:
      return submitProductReview(state, action);
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
  localStorage.setItem('state', JSON.stringify(state));
}

function assign(state, props) {
  return Object.assign({}, state, props);
}
