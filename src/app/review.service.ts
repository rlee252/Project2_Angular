import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Review} from '../model/review';
import { CurrentUser } from 'src/model/CurrentUser';

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
  private backEndUrlReviewsByUser = `http://localhost:8080/revProject2/user`
  private backEndUrlUser = `http://localhost:8080/revProject2/user/` + `Username`;

  private externalGameCoverProperties = `https://api.igdb.com/v4/covers`;

  private externalGameCover = `https://images.igdb.com/igdb/image/upload/t_`;
  private externalGameCoverThumb = `thumb/`;
  private externalGameCoverBig = `cover_big`;
  private externalGameCoverEnd = `.jpg`;

  

  constructor(private http: HttpClient) { }

  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.backEndUrlAll, httpOptions);
  }

  deleteReview(review: Review): Observable<Review> {
    const url = `${this.backEndUrlAll}/${review.reviewId}`;
    return this.http.delete<Review>(url, httpOptions);
  }

  getReviewsByUsername(review: Review, currentUser: CurrentUser): Observable<Review[]> {
    const url = `${this.backEndUrlReviewsByUser}/${currentUser.username}`;
    return this.http.get<Review[]>(url, httpOptions);
  }
}
