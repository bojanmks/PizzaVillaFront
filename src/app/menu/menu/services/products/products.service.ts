import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { IProduct } from '../../interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService<IProduct> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.products);
  }
}
