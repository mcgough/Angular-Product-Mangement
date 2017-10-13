import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';

import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
