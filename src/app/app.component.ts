import { Component, OnInit } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: 
  `
    <nav>
      <div class="nav-container">
        <ul>
          <li><a [routerLink]="['/']">Home</a></li>
          <li><a [routerLink]="['/products']">Products</a></li>
        </ul>
        <pm-cart-modal></pm-cart-modal>
      </div>
    </nav>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: [ './app.component.css' ],
  providers: [],
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts();
  }

}
