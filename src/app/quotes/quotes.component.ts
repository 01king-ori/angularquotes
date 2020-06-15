import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
  new Quotes('Marylin Monroe','I am selfish,impatient and a little insecure.I make mistakes,I am out of control and at times hard to handle.But if you cant handle me at my worst then you sure as hell dont deserve me at my best.','admin', new Date(2019,6,14)),
  new Quotes( 'Oscar Wilde','Be yourself; everyone else is already taken','admin',new Date(2020,6,14)),
  new Quotes('Albert Einstein','Two things are infinite;the universe and human stupidity;and I am not sure about the universe','admin',new Date(2019,6,14)), 
  
]

showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.name = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;//show or hide content
  }



ngOnInit() {
}

}