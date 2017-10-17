import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from '../home/welcome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: '**', component: WelcomeComponent }, //TODO: ADD 404      
    ]),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
