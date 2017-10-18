import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal',
  template: 
    `
      <div class="modal-overlay" *ngIf="visible">
        <div class="modal-container">
          <div class="close-modal" (click)="close()">
            <h3>&times;</h3>
          </div>
          <div class="content">
            <div>
              <h3 style="text-align: center; font-weight: 800;">
                <ng-content select="[modal-title]"></ng-content>
              </h3>    
            </div>
            <div>
              <ng-content select="[modal-body]"></ng-content>
            </div>
          </div>
        </div>
      </div>    
    `,
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() visible;
  @Output() closeModal = new EventEmitter();
  close() {
    this.closeModal.emit();
  }
}

