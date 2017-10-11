import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/filter';

import { IProduct, IGetProduct } from '../product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct;
  next: IProduct;
  previous: IProduct;
  modalUrl: string = '';
  modalName: string = '';
  
  constructor (private router: Router, private route: ActivatedRoute, private productService: ProductService) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => this.getProduct());
  }
  
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .then((response: IGetProduct) => {
        const { product, next, previous } = response;
        this.product = product;
        this.next = next;
        this.previous = previous;
      });    
  }
  handleImageClick(url: string, name: string): void {
    this.modalUrl = url;
    this.modalName = name;
  }
  clearModalUrl(): void {
    this.modalUrl = '';
    this.modalName = '';
  }
}
