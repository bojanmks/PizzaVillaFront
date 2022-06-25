import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { IOrder } from '../interfaces/i-order';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ApiService<IOrder> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.orders);
  }
}
