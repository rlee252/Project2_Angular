import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpUser } from 'src/model/SignUpUser';
@Injectable({
  providedIn: 'root'
})
export class SignupService {


  constructor(private httpClient: HttpClient) { }

  signupUser(signUpUser: SignUpUser) {
    console.log("signupUser()");
    return this.httpClient.post<SignUpUser>(`http://localhost:8080/revProject2/newUser`, signUpUser, { withCredentials: true });
  }
}
