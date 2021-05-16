import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { SignUpUser } from 'src/model/SignUpUser';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usernameInput: string;
  firstnameInput: string;
  lastnameInput: string;
  emailInput: string;
  passwordInput: string;
  confirmPasswordInput: string;

  signup: SignUpUser;
  signupService: SignupService;


  constructor(signupService: SignupService) {
    this.signupService = signupService;
  }

  ngOnInit(): void {
  }

  signupButtonClick() {
    console.log("signupButtonClick");
    console.log(this.usernameInput);

    this.signup = {
      username: this.usernameInput,
      password: this.passwordInput,
      firstName: this.firstnameInput,
      lastName: this.lastnameInput,
      email: this.emailInput
    }
    this.signupService.signupUser(this.signup).subscribe((response) => {
      console.log("response " + response);

    });

  }
}
