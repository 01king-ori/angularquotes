import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-delete',
  templateUrl: './quote-delete.component.html',
  styleUrls: ['./quote-delete.component.css']
})
export class QuoteDeleteComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();//transmits to the delete trigger from parent component on delete function

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  ngOnInit() {
  }

}
