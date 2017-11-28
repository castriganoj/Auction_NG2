// tag::annotations[]
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  templateUrl: 'app/components/stars/stars.component.html',
  selector: 'auction-stars',
  inputs: ['rating', 'count'] // <1>
})
// end::annotations[]
// tag::class[]
export default class StarsComponent {
  private _rating:number;
  private stars:boolean[];

  private maxStars: number = 5;

  @Input() readonly: boolean = true;
  @Input() get rating(): number{
    return this._rating;
  }

  set rating(value: number){
    this._rating = value || 0;
    this.stars = Array(this.maxStars).fill(true, 0, this.rating);
  }

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  fillStarWithColor(index){
    if(!this.readonly){
      this.rating = index + 1;
      this.ratingChange.emit(this.rating)
    }
  }
 
}

