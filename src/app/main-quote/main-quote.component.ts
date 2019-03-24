import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-main-quote',
  templateUrl: './main-quote.component.html',
  styleUrls: ['./main-quote.component.css']
})

export class MainQuoteComponent implements OnInit {
  quotes = [
    new Quote ("Feminism is the radical notion that women are human beings" , "Cheris Kramarae", "Doris Lessing", "Saturday, June 9th, 2019, 5:46:21 PM"),
  ]

  addNewQuote(quote){
    let dateFormat = require('dateformat');
    let now = new Date();
    quote.postDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss");
    this.quotes.push(quote);
}
  constructor() { }

  ngOnInit() {
  }

}
