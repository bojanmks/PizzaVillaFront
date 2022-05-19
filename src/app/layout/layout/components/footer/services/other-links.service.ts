import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { IFooterOtherLink } from '../interfaces/i-footer-other-link';

@Injectable({
  providedIn: 'root'
})
export class OtherLinksService extends ApiService<IFooterOtherLink[]>  {

  constructor(
    http: HttpClient
  ) {
    super(http, API.footerOtherLinks);
  }
}
