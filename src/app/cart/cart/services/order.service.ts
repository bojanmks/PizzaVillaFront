import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrderConstants } from 'src/app/menu/menu/interfaces/i-order-constants';
import { API } from 'src/app/shared/constants/apis';
import { CONFIG } from 'src/app/shared/constants/config';
import { IBasePagedDateSearch, IPagedSearch } from 'src/app/shared/interfaces/i-base-search';
import { IPagedResponse } from 'src/app/shared/interfaces/i-paged-response';
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

  override getAllPaged(search: IPagedSearch): Observable<IPagedResponse<IOrder>> {
    const basePagedDateSearch: IBasePagedDateSearch = search as IBasePagedDateSearch;

    let queryString = `?page=${basePagedDateSearch.page}&perPage=${basePagedDateSearch.perPage}&keyword=${basePagedDateSearch.keyword}`;

    if(basePagedDateSearch.dateFrom) {
      queryString += `&dateFrom=${basePagedDateSearch.dateFrom}`;
    }

    if(basePagedDateSearch.dateTo) {
      queryString += `&dateTo=${basePagedDateSearch.dateTo}`;
    }

    return this.http.get<IPagedResponse<IOrder>>(this.apiPrefix + this.apiPath + queryString);
  }
}
