import { Component, OnInit } from '@angular/core';
import { PostReviewDTO } from 'src/model/postReviewDTO';
import { PostReviewService } from '../post-review.service';

@Component({
  selector: 'app-post-game-review',
  templateUrl: './post-game-review.component.html',
  styleUrls: ['./post-game-review.component.css']
})
export class PostGameReviewComponent implements OnInit {
  gameNameInput: string;
  dummyGameNameInput: 523;

  ratingInput: number; // parse int
  descriptionInput: string;
  hoursPlayedInput: number; // parse int
  completionInput: number; // int

  postReviewDTO: PostReviewDTO;

  postReviewService: PostReviewService;

  constructor(postReviewService: PostReviewService) { }

  ngOnInit(): void {
  }

  submitReview() {
    //console.log(this.gameNameInput + " " + this.ratingInput + " " + this.descriptionInput + " " + this.hoursPlayedInput + " " + this.completionInput);
    this.postReviewDTO = {
      rating: this.ratingInput,
      description: this.descriptionInput,
      hoursPlayed: this.hoursPlayedInput,
      completionStatus: this.completionInput,
      gameID: this.dummyGameNameInput
    }
    this.postReviewService.postReview(this.postReviewDTO).subscribe((response) => {
      console.log("response " + response);
    });
  }

}
