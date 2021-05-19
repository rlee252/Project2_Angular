import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Review } from 'src/model/review';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() review: Review;
  @Output() onGetReviewsByUser: EventEmitter<Review> = new EventEmitter();

  reviews: Review[] = [];
  reviewNames = [];
  reviewThumbnails = [];

  constructor() { }

  ngOnInit(): void {

  }


  onGet(review: Review) {
    console.log("clicking getReviewsByUsername");
    this.onGetReviewsByUser.emit(review);
  }

}
