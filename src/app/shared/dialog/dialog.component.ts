import { Component, OnInit, DoCheck } from '@angular/core';
import { store, clearDialog } from '../../store';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IDialog } from './IDialog';

@Component({
  selector: 'pm-dialog',
  template: 
    ` 
      <div class="dialogs-container">
        <div class="dialog" *ngFor="let dialog of dialogs" [className]="dialog ? 'dialog ' + dialog.type : 'dialog'">
          <div class="content">
            <p>{{ dialog.message }}</p>
          </div>
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
export class DialogComponent implements OnInit {

  constructor() { }

  dialogs: IDialog[];

  ngOnInit(): void {
    store.subscribe(() => {
      this.updateDialogState();
    });
  }

  updateDialogState(): void {
    const appState = store.getState();
    this.dialogs = appState.dialogs;
  }

  closeDialog(): void {
    setTimeout(() => {
      store.dispatch(clearDialog());
    }, 3500);
  }

}
