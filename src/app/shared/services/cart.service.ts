import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { API } from '../constants/apis';
import { ICartItem } from '../interfaces/i-cart-item';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends ApiService<ICartItem> {

  private _getAllSubject$: BehaviorSubject<ICartItem[]> = new BehaviorSubject<ICartItem[]>([]);
  getAllSubject$ = this._getAllSubject$.asObservable();

  private subscription: Subscription;

  constructor(
    http: HttpClient
  ) {
    super(http, API.cart);
  }

  notifySubscribers(): void {
    this.subscription = this.getAll().subscribe({
      next: (data) => {
        this._getAllSubject$.next(data);
        this.subscription.unsubscribe();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
