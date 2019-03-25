import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-main-quote',
  templateUrl: './main-quote.component.html',
  styleUrls: ['./main-quote.component.css']
})

export class MainQuoteComponent implements OnInit {
  @Output() isComplete= new EventEmitter<boolean>();
  quotes = [
    new Quote (200,5,"Feminism is the radical notion that women are human beings" , "Cheris Kramarae", "Doris Lessing", new Date(2018,3,14,5,56,56)),
    new Quote (50, 6, "If particular care and attention is not paid to the ladies we are determined to foment a rebellion and will not hold ourselves bound by any laws in which we have no voice or representation" , "Abigail Adams", "Roman Payne", new Date(2017,5,20,9,46,34)),
    new Quote (40, 8, "Books to the ceiling, Books to the sky, My pile of books is a mile high. How I love them! How I need them! I'll have a long beard by the time I read them", "Arnold Lobel", "Chris Leisbeit",new Date(2018,3,14,8,27,56) ),
    new Quote (200,5,"Feminism is the radical notion that women are human beings" , "Cheris Kramarae", "Doris Lessing", new Date(2018,3,14,8,23,24)),
    new Quote (50, 6, "If particular care and attention is not paid to the ladies we are determined to foment a rebellion and will not hold ourselves bound by any laws in which we have no voice or representation" , "Abigail Adams", "Roman Payne",new Date(2019,1,14,4,55,34)),
    new Quote (40, 8, "Books to the ceiling, Books to the sky, My pile of books is a mile high. How I love them! How I need them! I'll have a long beard by the time I read them", "Arnold Lobel", "Chris Leisbeit",new Date(2019,3,18,7,7,50)),
    new Quote (40, 8, "Books to the ceiling, Books to the sky, My pile of books is a mile high. How I love them! How I need them! I'll have a long beard by the time I read them", "Arnold Lobel", "Chris Leisbeit", new Date(2019,1,14,3,35,40) ),
  ]


addNewQuote(object:Quote){
    let dateFormat = require('dateformat')
    object.postDate = dateFormat("dddd, mmmm dS, yyyy, h:MM:ss")
    this.quotes.push(object)
}


voteup(object:Quote) {
  object.voteup+=1
}

votedown(object:Quote) {
  object.votedown+=1
}

quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}

toggleDetails(index){
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}

deleteQuote(isComplete,index){
  if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete the quote by ${this.quotes[index].author}`)
      
      if(toDelete){
          this.quotes.splice(index,1)
      }
  }
}

  constructor() { }

  ngOnInit() {
  }

}
