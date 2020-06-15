import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>(); default
  uvotes = 0;
  dvotes = 0;

  upVote(){
    this.uvotes = this.uvotes + 1;
  }

  downVote(){
    this.dvotes = this.dvotes + 1;
  }
  originalNum:number
 lastNum:number
 counter:number
  highestUpvote(){
    this.originalNum = 0
    this.lastNum = 0
 
    for(this.counter=0 ; this.counter < this.uvotes; this.counter++) {
      this.lastNum = this.uvotes[this.counter].upvotes;
      if(this.lastNum > this.originalNum){this.originalNum = this.lastNum}
    }
    return  this.originalNum
  }
constructor() { }

ngOnInit() {
}

}
  
