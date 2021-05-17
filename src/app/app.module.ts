import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { LoginService } from './login.service';
import { SignupService } from './signup.service';
import { PostGameReviewComponent } from './post-game-review/post-game-review.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import {ReviewService} from './services/review.service';
import {RouterModule, Routes} from '@angular/router';
//
// const appRoutes: Routes = [
// {path: 'reviews', component: ReviewsComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PostGameReviewComponent,
    ReviewsComponent,
    ReviewItemComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [
    LoginService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
