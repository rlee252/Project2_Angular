import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-game-review',
  templateUrl: './post-game-review.component.html',
  styleUrls: ['./post-game-review.component.css']
})
export class PostGameReviewComponent implements OnInit {
  usernameInput: string;
  firstnameInput: string;
  lastnameInput: string;
  emailInput: string;
  passwordInput: string;
  confirmPasswordInput: string;
  constructor() { }

  ngOnInit(): void {
  }

}
