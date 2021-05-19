import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../model/review';
import { Game } from '../model/Game';


const httpOptions = {
  cors: 'no-cors',
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private backEndUrlAll = `http://localhost:8080/revProject2/review/all`;
  private backEndUrlRecent = `http://localhost:8080/revProject2/review/recent`;
  private backEndUrlUser = `http://localhost:8080/revProject2/user/`;
  private backEndUrlGameSearch = `http://localhost:8080/revProject2/game/search/`;

  constructor(private http: HttpClient) { }

  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.backEndUrlAll, httpOptions);
  }

  getReviewsByUser(username: string): Observable<Review[]> {
    return this.http.get<Review[]>(this.backEndUrlUser + username, httpOptions);
  }

  getRecentReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.backEndUrlRecent, httpOptions);
  }

  searchForGames(gameName: string): Observable<Game[]> {
    return this.http.get<Game[]>(this.backEndUrlGameSearch + gameName, httpOptions);
  }

  deleteReview(review: Review): Observable<Review> {
    const url = `${this.backEndUrlAll}/${review.reviewId}`;
    return this.http.delete<Review>(url, httpOptions);
  }
}