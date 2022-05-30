import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { IProductCategory } from '../../interfaces/i-product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService extends ApiService<IProductCategory> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.productCategories);
  }
}
