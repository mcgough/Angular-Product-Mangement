import { Component, OnInit } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: 
  `
    <nav>
      <div class="nav-container">
        <ul>
          <li><a [routerLink]="['/']" [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a [routerLink]="['/products']" [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact: true}">Products</a></li>
        </ul>
        <pm-cart-modal></pm-cart-modal>
      </div>
    </nav>
    <div>
      <router-outlet></router-outlet>
      <pm-dialog></pm-dialog>
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
