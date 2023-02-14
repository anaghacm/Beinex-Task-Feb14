import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSectionHeading]'
})
export class SectionHeadingDirective implements OnInit {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.display = 'flex';
    this.element.nativeElement.style.justifyContent = 'space-between';
    this.element.nativeElement.style.alignItems = 'center';
    this.element.nativeElement.style.paddingBottom = '20px';
  }

  ngOnInit(): void {
    let heading = this.element.nativeElement.firstChild;
    heading.style.fontSize = '16px';
    heading.style.letterSpacing = '2px';
    heading.style.fontWeight = 'bold';
    let w = heading.clientWidth + 10;
    
    let divider = this.element.nativeElement.lastChild;
    divider.style.height = '1px';
    divider.style.color = 'black';
    divider.style.opacity = '1';
    divider.style.width = 'calc(100% - ' + w + 'px)';
  }

}
