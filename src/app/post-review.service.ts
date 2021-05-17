import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostReviewDTO } from 'src/model/postReviewDTO';

@Injectable({
  providedIn: 'root'
})
export class PostReviewService {


  constructor(private httpClient: HttpClient) { }


  postReview(postReviewDTO: PostReviewDTO) {
    return this.httpClient.post<PostReviewDTO>(`http://localhost:8080/revProject2/review`, postReviewDTO, { withCredentials: true });
  }
}
