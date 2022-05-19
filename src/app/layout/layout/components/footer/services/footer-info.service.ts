import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { IFooterInfo } from '../interfaces/i-footer-info';

@Injectable({
  providedIn: 'root'
})
export class FooterInfoService extends ApiService<IFooterInfo[]> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.footerInfo);
  }
}
