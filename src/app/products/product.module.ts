import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ProductGuardService } from './product-guard.service';
import { SharedModule } from './../shared/shared.module';
import { ProductsRoutingModule } from './../routing/children/products-routing.module';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductReviewsComponent,
  ],
  providers: [ ProductGuardService ],
})
export class ProductModule { }
