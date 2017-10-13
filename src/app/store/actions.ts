export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';

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