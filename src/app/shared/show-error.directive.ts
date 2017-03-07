import {
  Directive, HostListener, HostBinding,
  ElementRef, Renderer, Input
} from '@angular/core';

import { NgModel } from '@angular/forms';

@Directive({
  selector: 'input [showError]'
})
export class ShowErrorDirective {

  // @Input('showError') highlightColor: NgModel;
  @Input('showError') set highlightColora(ngModel: any){
      console.log("NgModel ===>", ngModel);
  }

  private nativeElement: Node;
  constructor(private renderer: Renderer, private element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  @HostListener('mouseenter') onMouseOver() {
    let span = this.renderer.createElement(this.nativeElement, "span");
    this.renderer.createText(span, "Click meddd!");
    this.renderer.attachViewAfter(this.nativeElement, [span]);

    //console.log("highlightColor", this.highlightColor.model);

    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') get setColor() {
    // console.log("style.backgroundColor') get setColor()");
    return this.backgroundColor;
  }
  private backgroundColor: string;
}
