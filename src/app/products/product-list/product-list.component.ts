import { Component, OnInit } from '@angular/core';
import { IProduct } from './../product';
import { store, filterProducts } from '../../store';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}
  
  pageTitle: string = 'Products';
  showImage: boolean = true;
  searchTerm: string = '';
  products: IProduct[];
  filteredProducts: IProduct[];
  errorMessage: string;
  
  ngOnInit(): void {
    this.updateFromState();
    store.subscribe(() => {
      this.updateFromState();
    })
  }
  
  filterChanged(): void {
    store.dispatch(filterProducts(this.searchTerm));
  }
  updateFromState(): void {
    const allState = store.getState();
    this.products = allState.products;
    this.filteredProducts = allState.filteredProducts;
  }
  
  clearFilter(): void {
    this.searchTerm = '';
    this.filterChanged();
  }
}