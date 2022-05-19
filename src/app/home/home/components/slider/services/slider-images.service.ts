import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { ISliderImage } from '../interfaces/i-slider-image';

@Injectable({
  providedIn: 'root'
})
export class SliderImagesService extends ApiService<ISliderImage[]> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.sliderImages);
  }
}
