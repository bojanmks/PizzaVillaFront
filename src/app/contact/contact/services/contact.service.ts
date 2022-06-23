import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/shared/constants/apis';
import { CONFIG } from 'src/app/shared/constants/config';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(email: string, title: string, message: string): Observable<any> {
    return this.http.post(CONFIG.SERVER + API.contact, {
      title,
      email,
      message
    });
  }
}
