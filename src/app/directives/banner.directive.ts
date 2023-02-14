import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBanner]'
})
export class BannerDirective  implements OnInit{

  constructor(private element:ElementRef) { 
    this.element.nativeElement.parentNode.style.paddingBottom = '0';
    
  }
  ngOnInit(): void {
    let image = this.element.nativeElement.firstChild;
    image.style.borderRadius = '25px';
    image.style.backgroundImage = 'url(../../../assets/images/banner.jpg)';
    image.style.backgroundPosition = 'center';
    image.style.backgroundRepeat = 'no-repeat';
    image.style.backgroundSize = 'cover';
    image.style.width = '100%';
    image.style.paddingBottom = '220px';
    image.style.paddingTop = '220px';
    image.style.boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px';

    let text = this.element.nativeElement.lastChild;
    text.style.display = 'flex';
    text.style.flexWrap = 'wrap';
    text.style.justifyContent = 'center';
    text.style.paddingTop = '30px';
    text.style.lineHeight = '40px';
    text.style.letterSpacing = '2px';

    let heading=this.element.nativeElement.lastChild.firstChild;
    heading.style.fontSize='16px';
    heading.style.fontFamily='Source Serif Pro, serif';

    let content=this.element.nativeElement.lastChild.lastChild;
    content.style.fontSize='27px';
    content.style.fontFamily='Condiment, cursive';
    content.style.paddingLeft='10px';
  }

}
