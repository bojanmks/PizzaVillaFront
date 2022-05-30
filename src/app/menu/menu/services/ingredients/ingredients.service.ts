import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { IIngredient } from '../../interfaces/i-ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService extends ApiService<IIngredient> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.ingredients);
  }
}
