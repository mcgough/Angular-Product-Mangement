import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private _productService: ProductService) {}
  pageTitle: string = 'Product List';
  showImage: boolean = true;
  listFilter: string = '';
  modalUrl: string = '';
  modalName: string = '';
  products: IProduct[] = [];
  errorMessage: string;
  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(
        products => this.products = products,
        error => this.errorMessage = <any>error
      );
  };
  toggleImage(): void {
    this.showImage = !this.showImage;
  };
  clearFilter(): void {
    this.listFilter = '';
  };
  handleImageClick(url: string, name: string): void {
    this.modalUrl = url;
    this.modalName = name;
  };
  clearModalUrl(): void {
    this.modalUrl = '';
    this.modalName = '';
  };
  get filteredProducts(): IProduct[] {
    return this.products.filter((product: IProduct) => {
      if (product.productName.toLowerCase().indexOf(this.listFilter.toLowerCase()) > -1) {
        return product;
      }
    })
  };
}