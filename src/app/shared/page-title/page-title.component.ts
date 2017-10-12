import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  template: 
    `
      <div class="heading">
        <h2>{{ pageTitle }}</h2>
      </div>
    `,
  styleUrls: ['page-title.component.css'],
})
export class PageTitleComponent {
  @Input() pageTitle: string;
}