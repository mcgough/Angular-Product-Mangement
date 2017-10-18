import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CartModalComponent } from './cart-modal/cart-modal.component';
import { StarComponent } from './star/star.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ModalComponent } from './modal/modal.component';

import { ConvertToSpacesPipe } from './Pipes/convert-to-spaces';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    CartModalComponent,
    PageTitleComponent,
    StarComponent,
    ModalComponent,
    ConvertToSpacesPipe,
    CartModalComponent,
  ],
  exports: [
    CartModalComponent,
    PageTitleComponent,
    StarComponent,
    ModalComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe,
  ],
})
export class SharedModule { }
