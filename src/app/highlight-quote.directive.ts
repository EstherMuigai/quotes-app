import { Directive, ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.highlightMe('linear-gradient(to right, #e8aed7,#f27dd0, #e8aed7,#f27dd0,#e8aed7)')
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.highlightMe("None")
  }

  private highlightMe (action:string){
  this.elem.nativeElement.style.background = action;
}
}
