import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { IRoute } from 'src/app/shared/interfaces/i-route';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class NavLinksService extends ApiService<IRoute[]> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.navLinks);
  }
}
