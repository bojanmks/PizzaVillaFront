import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrderConstants } from 'src/app/menu/menu/interfaces/i-order-constants';
import { API } from 'src/app/shared/constants/apis';
import { CONFIG } from 'src/app/shared/constants/config';
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

  constants(): Observable<IOrderConstants> {
    return this.http.get<IOrderConstants>(CONFIG.SERVER + API.orders + "/constants");
  }
}
