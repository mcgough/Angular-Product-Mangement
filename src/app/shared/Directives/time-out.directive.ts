import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[pmTimeOut]'
})
export class TimeOutDirective {
  
  constructor(el: ElementRef) {
    this.opacityToZero(el);
    this.removeElement(el);
  }

  opacityToZero(elem: ElementRef) {
    setTimeout(() => {
      elem.nativeElement.style.opacity = 0;
    }, 2000)
  }
  removeElement(elem: ElementRef) {
    setTimeout(() => {
      elem.nativeElement.remove();
    }, 2500)
  }

}
