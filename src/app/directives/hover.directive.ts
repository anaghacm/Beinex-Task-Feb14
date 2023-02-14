import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.color='#e2e7eb';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.color='';
  }
}
