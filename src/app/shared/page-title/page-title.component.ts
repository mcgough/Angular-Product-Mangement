import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  template: 
    `
      <div class="heading">
        <h2>{{ pageTitle }}</h2>
      </div>
    `,
  styles: ['.heading { margin: 25px 0; }', 'h2 { margin: 0; }'],
})
export class PageTitleComponent {
  @Input() pageTitle: string;
}