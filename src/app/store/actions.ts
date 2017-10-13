export const FILTER_PRODUCTS = 'products/FILTER';

export function filterProducts(searchText:string) {
  return {
    type: FILTER_PRODUCTS,
    searchText,
  }
}