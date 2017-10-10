import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'image-modal',
  template: 
    `
      <div>
        <div class="modal-overlay"></div>
        <div class="modal-image-overlay" (click)="close()">
          <div class="modal-image-container">
            <div class="modal-image-title">
              <h3>{{ name }}</h3>
            </div>
            <img [src]="url" />
          </div>
        <div>
      <div>
    `,
  styleUrls: ['./image-modal.component.css'],
})
export class ImageModalComponent {
  @Input() url: string;
  @Input() name: string;
  @Output() closeModal = new EventEmitter();
  close() {
    this.closeModal.emit();
  }
}

