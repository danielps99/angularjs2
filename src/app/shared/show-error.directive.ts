import { Directive, HostListener, HostBinding,
  ElementRef, Renderer, Input } from '@angular/core';

  import { NgModel } from '@angular/forms'; 

@Directive({
  selector: 'input [showError]'
})
export class ShowErrorDirective {

  @Input('showError') highlightColor: NgModel;

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
      );*/
      this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
      );*/
      this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra;
    return this.backgroundColor;  
  }
  private backgroundColor: string;

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer
    ) { }

    ngOnInit(){
    console.log("this.highlightColor", this.highlightColor);
  }


}
