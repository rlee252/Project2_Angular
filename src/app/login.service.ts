import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/User';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isUserLoggedIn: boolean = false;
  constructor(private httpClient: HttpClient) { }

  getUserLoginAndPassword(usernameInput: string, passwordInput: string): Observable<User> {
    console.log("inside userLoginAndPassword() " + usernameInput + passwordInput);
    return this.httpClient.post<User>(`http://localhost:8080/revProject2/login`, { username: usernameInput, password: passwordInput }, { withCredentials: true });

  }

  confirmLogin(): Observable<User> {
  
    console.log(`inside confirmLogin()` );
    // TODO: get currentUser.username
    // localStorage.setItem('username', );
    return this.httpClient.get<User>(`http://localhost:8080/revProject2/user/currentUser`, {
      withCredentials: true,
    });
  }

  logoutUser(user: User): Observable<Object> {
    return this.httpClient.post<Object>(`http://localhost:8080/revProject2/logout`, Object, { withCredentials: true });
  }

  setUserStatus() {
    this.isUserLoggedIn = !this.isUserLoggedIn;
  }

  getUserStatus() {
    return this.isUserLoggedIn;
  }

}
function username(arg0: string, username: any) {
  throw new Error('Function not implemented.');
}

