import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from '../home/welcome.component';
import { PageNotFoundComponent } from '../home/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: '**', component: PageNotFoundComponent },      
    ]),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
