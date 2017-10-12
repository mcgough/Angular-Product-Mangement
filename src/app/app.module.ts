import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';

import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
    ProductModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
