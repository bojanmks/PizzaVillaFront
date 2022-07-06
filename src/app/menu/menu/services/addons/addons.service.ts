import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { IAddon } from '../../interfaces/i-addon';

@Injectable({
  providedIn: 'root'
})
export class AddonsService extends ApiService<IAddon> {

  public override hasAdminSuffixGetAll: boolean = true;

  constructor(
    http: HttpClient
  ) {
    super(http, API.addons);
  }
}
