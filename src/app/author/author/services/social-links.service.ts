import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { ILinkIcon } from 'src/app/shared/interfaces/i-link';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SocialLinksService extends ApiService<ILinkIcon> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.authorSocials);
  }
}
