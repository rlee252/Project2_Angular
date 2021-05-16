import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private someProperty: string = 'A string';
  constructor(private httpClient: HttpClient) { }

  getUserLoginAndPassword(usernameInput: string, passwordInput: string): Observable<User> {
    console.log("inside userLoginAndPassword() " + usernameInput + passwordInput);
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<User>(`http://localhost:8080/revProject2/login`,
      { username: usernameInput, password: passwordInput }, { withCredentials: true });

  }

}
