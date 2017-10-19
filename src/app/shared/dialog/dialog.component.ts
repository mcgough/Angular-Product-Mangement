import { Component, OnInit, DoCheck } from '@angular/core';
import { store, clearDialog } from '../../store';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IDialog } from './IDialog';

@Component({
  selector: 'pm-dialog',
  template: 
    ` 
      <div [@fadeInOut]="type" class="dialog-container" [ngClass]="[type ? type : '']">
        <div class="content">
          <p>{{ message }}</p>
        </div>
      </div>
    `,
  styleUrls: ['./dialog.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('success', style({
        opacity: 1,
      })),
      state('error', style({
        opacity: 1,
      })),
      state('hidden', style({
        opacity: 0,
      })),
      transition('visible <=> hidden', animate('300ms ease-in-out')),
    ])
  ]
})
export class DialogComponent implements OnInit, DoCheck {

  constructor() { }

  message: string;
  type: string;
  dialogs: IDialog[];

  ngOnInit(): void {
    store.subscribe(() => {
      this.updateDialogState();
    });
  }
  ngDoCheck(): void {
    if (this.message) {
      this.closeDialog();
    }
  }

  updateDialogState(): void {
    const appState = store.getState();
    const { message, type } = appState.dialog; 
    this.message = message;
    this.type = type;
  }

  closeDialog(): void {
    setTimeout(() => { this.type = null; }, 3000);
    setTimeout(() => {
      store.dispatch(clearDialog());
    }, 3500);
  }

}
