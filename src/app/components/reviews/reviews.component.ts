import { Component, OnInit } from '@angular/core';
import { ReviewService} from '../../services/review.service';
import {Review} from '../../review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getReviewsByCurrentUser().subscribe((reviews) => (this.reviews = reviews));
  }


  deleteReview(review: Review) {
    this.reviewService
      .deleteReview(review)
      .subscribe(
        () => (this.reviews = this.reviews.filter((r) => r.reviewId !== review.reviewId))
        );
  }
}
