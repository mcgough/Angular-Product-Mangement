import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  template: 
    `
      <div class="heading">
        <h2>{{ pageTitle }}</h2>
      </div>
    `,
})
export class PageTitleComponent {
  @Input() pageTitle: string;
}