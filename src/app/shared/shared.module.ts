import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartModalComponent } from './cart-modal/cart-modal.component';
import { StarComponent } from './star/star.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ImageModalComponent } from './image-modal/image-modal.component';

import { ConvertToSpacesPipe } from './Pipes/convert-to-spaces';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CartModalComponent,
    PageTitleComponent,
    StarComponent,
    ImageModalComponent,
    ConvertToSpacesPipe,
    CartModalComponent,
  ],
  exports: [
    CartModalComponent,
    PageTitleComponent,
    StarComponent,
    ImageModalComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe,
  ],
})
export class SharedModule { }
