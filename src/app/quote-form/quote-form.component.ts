import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  public showForm:boolean;
  newQuote = new Quote (0,0,"","","","");
  @Output() addQuote=new EventEmitter<Quote>();
    submitQuote(){
        this.addQuote.emit(this.newQuote);
        this.showForm = false;
    }

  constructor() { 
    this.showForm = true;
  }

  ngOnInit() {
  }

}
