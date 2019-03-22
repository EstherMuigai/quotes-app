import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-quote',
  templateUrl: './main-quote.component.html',
  styleUrls: ['./main-quote.component.css']
})
export class MainQuoteComponent implements OnInit {
  quotes = []
  addNewQuote(quote){
    let quotesLength = this.quotes.length;
    quote.id=quotesLength+1;
    let dateFormat =require('dateformat');
    let now = new Date();
    quote.postDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    this.quotes.push(quote);
}
  constructor() { }

  ngOnInit() {
  }

}
