import { IProduct } from '../products/product';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const SET_CART_MODAL_FLAG = 'SET_CART_MODAL_FLAG';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const SUBMIT_PRODUCT_REVIEW = 'SUBMIT_PRODUCT_REVIEW';

export const setProducts = (products: IProduct[]) => {
  return { 
    type: SET_PRODUCTS,
    products,
  };
}

export const filterProducts = (searchText:string) => {
  return {
    type: FILTER_PRODUCTS,
    searchText,
  }
}

export const setSelectedProduct = (id: number) => {
  return {
    type: SET_SELECTED_PRODUCT,
    id,
  }
}

export const submitProductReview = (review: Object) => {
  return {
    type: SUBMIT_PRODUCT_REVIEW,
    review,
  }
}

export const addProductToCart = (product: Object) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  }
}

export const removeProductFromCart = (product: IProduct) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    product,
  }
}

export const setCartModalFlag = (flag: boolean) => {
  return {
    type: SET_CART_MODAL_FLAG,
    flag,
  }
}
