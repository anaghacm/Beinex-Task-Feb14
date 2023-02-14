import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetDivider]'
})
export class SetDividerDirective {

  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.backgroundColor='#e2e7eb';
    this.element.nativeElement.style.fontSize='14px';
    this.element.nativeElement.style.fontWeight='bold';
    this.element.nativeElement.style.letterSpacing='2px';
    this.element.nativeElement.style.display='flex';
    this.element.nativeElement.style.alignItems='center';
    this.element.nativeElement.style.justifyContent='center';
  }


}
