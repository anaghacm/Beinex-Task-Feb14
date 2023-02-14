import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective implements OnInit {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.textAlign = 'center';
    this.element.nativeElement.style.border = 'none';
    this.element.nativeElement.style.overflow = 'hidden';
    this.element.nativeElement.style.borderRadius = '0';
  }

  ngOnInit(): void {
    let image = this.element.nativeElement.firstChild;
    image.style.borderRadius = '0';
    let cardHead = this.element.nativeElement.lastChild.firstChild;
    cardHead.style.fontWeight = 'bolder';
    cardHead.style.fontSize = '24px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    let image = this.element.nativeElement.firstChild;
    image.style.transition = 'all 0.5s';
    image.style.transform = 'scale(1.1)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.firstChild.style.transform = 'scale(1)';
  }
}
