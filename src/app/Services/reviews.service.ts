import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IReviews {
  name: string;
  rating: string;
  review: string;
};

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
    url: string = "https://shielded-depths-40144.herokuapp.com/reviews";
    constructor(private http: HttpClient) { }
  
    getReviews() : Observable<IReviews[]>{
      return this.http.get<IReviews[]>(this.url);
    }
}
