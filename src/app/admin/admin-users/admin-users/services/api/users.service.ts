import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { IUser } from '../../interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService<IUser> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.users);
  }
}
