import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IOrder {
  name: string;
  phone: string;
  cart: string;
  total: string;
  date: string;
}
@Injectable({
  providedIn: 'root',
})

export class OrderService {
  email = localStorage.getItem('email');
  url: string = `https://shielded-depths-40144.herokuapp.com/orders/${this.email}`;
  constructor(private http: HttpClient) {}

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.url);
  }

}
