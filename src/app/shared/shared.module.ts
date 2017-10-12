import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star/star.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ImageModalComponent } from './image-modal/image-modal.component';

import { ConvertToSpacesPipe } from './Pipes/convert-to-spaces';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageTitleComponent,
    StarComponent,
    ImageModalComponent,
    ConvertToSpacesPipe,
  ],
  exports: [
    PageTitleComponent,
    StarComponent,
    ImageModalComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe,
  ],
})
export class SharedModule { }
