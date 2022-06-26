import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/shared/constants/apis';
import { CONFIG } from 'src/app/shared/constants/config';
import { ApiService } from 'src/app/shared/services/api.service';
import { IContactMessage } from '../interfaces/i-contact-message';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ApiService<IContactMessage> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.contact);
  }
}
