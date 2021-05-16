import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameInput: string;
  passwordInput: string;
  loginService: LoginService;





  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  ngOnInit(): void {
  }


  submitButtonClick() {
    console.log("clicked");
    console.log(this.usernameInput);
    console.log(this.passwordInput);

    this.loginService.getUserLoginAndPassword(this.usernameInput, this.passwordInput).subscribe((response) => {
      console.log("response: " + response);
      console.log("httpresponse: " + HttpErrorResponse);
    });
  }

}
