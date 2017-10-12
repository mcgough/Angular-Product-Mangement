import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from '../../products/product-list/product-list.component';
import { ProductDetailComponent } from '../../products/product-detail/product-detail.component';

import { ProductGuardService } from '../../products/product-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
        canActivate: [ ProductGuardService ],
        component: ProductDetailComponent },   
    ]),
  ],
  exports: [ RouterModule ],
})
export class ProductsRoutingModule { }
