import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[pmTimeOut]'
})
export class TimeOutDirective {
  
  constructor(el: ElementRef) {
    setTimeout(() => {
      el.nativeElement.style.opacity = 0;
    }, 2000);
  }

}
