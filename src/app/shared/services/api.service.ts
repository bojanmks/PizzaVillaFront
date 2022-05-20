import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../constants/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> {

  constructor(
    protected http: HttpClient,
    @Inject("apiPath") protected apiPath: string
  ) {}

  private apiPrefix = this.apiPath.endsWith(".json") ? CONFIG.LOCAL : CONFIG.SERVER;
  
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiPrefix + this.apiPath);
  }

  get(id: number | string): Observable<T> {
    return this.http.get<T>(this.apiPrefix + this.apiPath + "/" + id);
  }

  create(dataToSend: T): Observable<T> {
    return this.http.post<T>(this.apiPrefix + this.apiPath, dataToSend);
  }

  update(id: number | string, dataToSend: T): Observable<T>  {
    return this.http.patch<T>(this.apiPrefix + this.apiPath + "/" + id, dataToSend);
  }

  delete(id: number | string): Observable<T>  {
    return this.http.delete<T>(this.apiPrefix + this.apiPath + "/" + id);
  }

}
