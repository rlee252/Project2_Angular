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

    if(this.usernameInput != null){
      if(this.passwordInput != null){
        this.loginService.getUserLoginAndPassword(this.usernameInput, this.passwordInput).subscribe((response) => {
          //if it even gets here, it means the login is successful and we can navigate to a new page
          window.location.href = 'http://www.youtube.com';
          //Replace this with angular's navigate by URL
        });
        displayInvalidLogin("Invalid Credentials");
      } else {
        displayInvalidLogin("Must Enter Password");
      }
    } else {
      displayInvalidLogin("Must Enter Username");
    }

    
  }


}

function clearErrorMessage(){
  let errorMessage = document.getElementById('errorMessage');
  if(errorMessage != null){
      errorMessage.remove();
  }
}

function displayInvalidLogin(errorString) {
  clearErrorMessage();
  let bodyElement = document.getElementById('checkError');
  let pElement = document.createElement('p');
  pElement.setAttribute("id", "errorMessage");
  pElement.style.color = 'red';
  pElement.innerHTML = errorString;
  bodyElement.appendChild(pElement);
  console.log("invalid request");
}
