import { Component, OnInit } from '@angular/core';
import { IProduct } from './../product';
import { ProductService } from './../product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  pageTitle: string = 'Product List';
  showImage: boolean = true;
  listFilter: string = '';
  products: IProduct[] = [];
  errorMessage: string;
  get filteredProducts(): IProduct[] {
    return this.products.filter((product: IProduct) => {
      if (product.productName.toLowerCase().indexOf(this.listFilter.toLowerCase()) > -1) {
        return product;
      }
    })
  }
  
  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
        products => this.products = products,
        error => this.errorMessage = <any>error
      );
  }
  
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  clearFilter(): void {
    this.listFilter = '';
  }
}