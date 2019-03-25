import { Directive, ElementRef} from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  constructor(private elem:ElementRef){}

  votes = []
  HighlightQuote(object:Quote) {
    this.votes.push(object.voteup)
    if (object.voteup=Math.max(...this.votes)) {
      this.highlightMe('linear-gradient(to right, #e8aed7,#f27dd0, #e8aed7,#f27dd0,#e8aed7)')
    }
  }

  private highlightMe (action:string){
  this.elem.nativeElement.style.background = action;
}
}
