import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { UserProfileComponent } from './user-profile/user-profile.component';


import { LoginService } from './login.service';
import { SignupService } from './signup.service';
import { PostGameReviewComponent } from './post-game-review/post-game-review.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserProfileComponent,
    PostGameReviewComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LoginService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
