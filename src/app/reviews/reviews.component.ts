import { Component, OnInit } from '@angular/core';
import { Review} from '../../model/review'
import { ReviewService } from '../review.service';

console.log("yowasup");

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  reviewNames = [];
  reviewThumbnails = [];

  constructor(private reviewService: ReviewService) { }
  


  ngOnInit(): void {
    
    this.reviewService.getAllReviews().subscribe((reviews) => (this.reviews = reviews));
    
  }


  deleteReview(review: Review) {
    this.reviewService
      .deleteReview(review)
      .subscribe(
        () => (this.reviews = this.reviews.filter((r) => r.reviewId !== review.reviewId))
        );
  }
}
