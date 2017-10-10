import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ImageModalComponent } from './shared/image-modal/image-modal.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { ConvertToSpacesPipe } from './shared/Pipes/convert-to-spaces';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';

import { ProductService } from './products/product.service';
import { ProductGuardService } from './products/product-guard.service';

@NgModule({
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    PageTitleComponent,
    ProductListComponent,
    ImageModalComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
        canActivate: [ ProductGuardService ],
        component: ProductDetailComponent },
      { path: '', component: WelcomeComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [ ProductService, ProductGuardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
