import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-main-quote',
  templateUrl: './main-quote.component.html',
  styleUrls: ['./main-quote.component.css']
})

export class MainQuoteComponent implements OnInit {
  quotes = [
    new Quote (200,5,"Feminism is the radical notion that women are human beings" , "Cheris Kramarae", "Doris Lessing", "Saturday, June 9th, 2019, 5:46:21 PM"),
    new Quote (50, 6, "If particular care and attention is not paid to the ladies we are determined to foment a rebellion and will not hold ourselves bound by any laws in which we have no voice or representation" , "Abigail Adams", "Roman Payne", "Friday, March 9th, 2018, 7:46:21 AM"),
    new Quote (40, 8, "Books to the ceiling, Books to the sky, My pile of books is a mile high. How I love them! How I need them! I'll have a long beard by the time I read them", "Arnold Lobel", "Chris Leisbeit","Wednesday, September 9th, 2018, 3:46:21 AM" ),
    new Quote (200,5,"Feminism is the radical notion that women are human beings" , "Cheris Kramarae", "Doris Lessing", "Saturday, June 9th, 2019, 5:46:21 PM"),
    new Quote (50, 6, "If particular care and attention is not paid to the ladies we are determined to foment a rebellion and will not hold ourselves bound by any laws in which we have no voice or representation" , "Abigail Adams", "Roman Payne", "Friday, March 9th, 2018, 7:46:21 AM"),
    new Quote (40, 8, "Books to the ceiling, Books to the sky, My pile of books is a mile high. How I love them! How I need them! I'll have a long beard by the time I read them", "Arnold Lobel", "Chris Leisbeit","Wednesday, September 9th, 2018, 3:46:21 AM" ),
    new Quote (40, 8, "Books to the ceiling, Books to the sky, My pile of books is a mile high. How I love them! How I need them! I'll have a long beard by the time I read them", "Arnold Lobel", "Chris Leisbeit","Wednesday, September 9th, 2018, 3:46:21 AM" ),
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
