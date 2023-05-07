import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavToggle]'
})
export class NavToggleDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.el.nativeElement.classList.toggle('active');
  }
}
