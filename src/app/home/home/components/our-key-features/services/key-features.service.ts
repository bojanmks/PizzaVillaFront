import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { IKeyFeature } from '../interfaces/i-key-feature';

@Injectable({
  providedIn: 'root'
})
export class KeyFeaturesService extends ApiService<IKeyFeature> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.keyFeatures);
  }
}
