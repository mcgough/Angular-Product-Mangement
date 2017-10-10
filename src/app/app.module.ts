import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ImageModalComponent } from './shared/image-modal/image-modal.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';

@NgModule({
  declarations: [ AppComponent, PageTitleComponent, ProductListComponent, ImageModalComponent ],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
