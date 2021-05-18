import { Component, Input, OnInit } from '@angular/core';
import { CurrentUser } from 'src/model/CurrentUser';
import { LoginService } from '../login.service';
 


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: CurrentUser;

  constructor(private loginService: LoginService){}


  ngOnInit(): void {
    this.loginService.confirmLogin().subscribe((currentUser) => (this.currentUser = this.currentUser));
  }

}
