import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CartModalComponent } from './cart-modal/cart-modal.component';
import { StarComponent } from './star/star.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ModalComponent } from './modal/modal.component';

import { ConvertToSpacesPipe } from './Pipes/convert-to-spaces';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    CartModalComponent,
    PageTitleComponent,
    StarComponent,
    ModalComponent,
    ConvertToSpacesPipe,
    CartModalComponent,
    DialogComponent,
  ],
  exports: [
    CartModalComponent,
    PageTitleComponent,
    StarComponent,
    ModalComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe,
    DialogComponent,
  ],
})
export class SharedModule { }
