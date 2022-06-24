import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../constants/apis';
import { ICartItem } from '../interfaces/i-cart-item';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends ApiService<ICartItem> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.cart);
  }
}
