import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id')
    this._productService.getProducts()
      .subscribe((products) => {
        for (let product of products) {
          if (product.productId === id) {
            this.product = product;
          }
        }
      });
  }

}
