import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
   newQuotes= new Quotes("","","",NewDate()) 
  
@Output() Quotes = new EventEmitter<Quotes>
submitQuotes() {
  this.Quotes.emit(this.newQuotes);
}
constructor() { }
  ngOnInit(): void {
  }

}
