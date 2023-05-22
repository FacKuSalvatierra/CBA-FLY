import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[stickyHeader]'
})
export class StickyHeaderDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.renderer.addClass(this.el.nativeElement, 'sticky');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'sticky');
    }
  }
}