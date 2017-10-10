import { Component } from '@angular/core';
import { ProductService } from 'app/products/product.service';

@Component({
  selector: 'pm-root',
  template: 
  `
    <nav>
      <div class="nav-container">
        <ul>
          <li><a [routerLink]="['/']">Home</a></li>
          <li><a [routerLink]="['/products']">Product List</a></li>
        </ul>
      </div>
    </nav>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: [ './app.component.css' ],
  providers: [ ProductService ],
})
export class AppComponent {
  public pageTitle: string = 'Product Management';
}
