import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
 


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  CurrentUser currentUser;


  constructor(loginService: LoginService){
    this.loginService = loginService;
  }

  ngDoCheck(): void {
    this.isUserLoggedIn = this.loginService.getUserStatus();
    console.log("inside ngOnChanges() " + this.isUserLoggedIn)
  }

  ngOnInit(): void {
      
  }

}
