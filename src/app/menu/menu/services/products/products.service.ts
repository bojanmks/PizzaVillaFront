import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/shared/constants/apis';
import { CONFIG } from 'src/app/shared/constants/config';
import { ApiService } from 'src/app/shared/services/api.service';
import { IProduct } from '../../interfaces/i-product';
import { IProductSearch } from '../../interfaces/i-product-search';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService<IProduct> {

  public override hasAdminSuffixGetAll: boolean = true;
  public override hasAdminSuffixGet: boolean = true;

  constructor(
    http: HttpClient
  ) {
    super(http, API.products);
  }

  override getAll(search: IProductSearch = null): Observable<IProduct[]> {
    let queryString: string = "";

    if(search !== null) {
      queryString = `?keyword=${search.keyword}&perPage=${search.perPage}&page=${search.page}&sortOrder=${search.sortOrder}`;

      for(let c of search.categoryIds) {
        queryString += `&categoryIds=${c}`;
      }
    }

    return this.http.get<IProduct[]>(CONFIG.SERVER + API.products + queryString);
  }
}
