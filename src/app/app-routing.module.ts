import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PostGameReviewComponent } from './post-game-review/post-game-review.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'postGameReview', component: PostGameReviewComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
