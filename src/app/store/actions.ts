export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const SET_CART_MODAL_FLAG = 'SET_CART_MODAL_FLAG';

export function filterProducts(searchText:string) {
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

export const addProductToCart = (product: Object) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  }
}

export const setCartModalFlag = (flag: boolean) => {
  return {
    type: SET_CART_MODAL_FLAG,
    flag,
  }
}