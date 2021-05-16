import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Review} from '../review';

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
  // Should be reviews by current user
  private apiUrl = `http://localhost:8080/revProject2_war/review/3`;

  constructor(private http: HttpClient) { }

  getReviewsByCurrentUser(): Observable<Review[]> {
    console.log(`apiUrl: ` + this.apiUrl);
    return this.http.get<Review[]>(this.apiUrl, httpOptions);
  }
}
