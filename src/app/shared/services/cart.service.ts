import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { API } from '../constants/apis';
import { CONFIG } from '../constants/config';
import { ICartItem } from '../interfaces/i-cart-item';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends ApiService<ICartItem> {

  private _getAllSubject$: BehaviorSubject<ICartItem[]> = new BehaviorSubject<ICartItem[]>([]);
  getAllSubject$ = this._getAllSubject$.asObservable();

  constructor(
    http: HttpClient
  ) {
    super(http, API.cart);
  }

  notifySubscribers(): void {
    this.getAll().subscribe({
      next: (data) => {
        this._getAllSubject$.next(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  increase(id: number | string): Observable<any> {
    return this.http.put(CONFIG.SERVER + API.cart + `/${id}/` + 'increase', {});
  }

  decrease(id: number | string): Observable<any> {
    return this.http.put(CONFIG.SERVER + API.cart + `/${id}/` + 'decrease', {});
  }
}
