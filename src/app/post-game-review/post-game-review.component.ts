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
  dummyGameNameInput = 523;

  ratingInput: string; // parse int
  descriptionInput: string;
  hoursPlayedInput: number; // parse int
  completionInput: number; // int

  postReviewDTO: PostReviewDTO;

  postReviewService: PostReviewService;

  constructor(postReviewService: PostReviewService) {this.postReviewService = postReviewService}

  ngOnInit(): void {
  }

  submitReview() {
    console.log(this.gameNameInput + " " + this.ratingInput + " " + this.descriptionInput + " " + this.hoursPlayedInput + " " + this.completionInput);
    this.postReviewDTO = {
      rating: Number(this.ratingInput),
      description: this.descriptionInput,
      hoursPlayed: Number(this.hoursPlayedInput),
      completionStatus: Number(this.completionInput),
      gameID: this.dummyGameNameInput
    }

    console.log(this.postReviewDTO);
    this.postReviewService.postReview(this.postReviewDTO).subscribe((response) => {
      //if it even gets here, it means the post review was successful
      window.location.href = 'http://www.youtube.com';
      //Replace this with angular's navigate by URL
    });
  }
  
}

