import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../constants/config';
import { Observable } from 'rxjs';
import { IBasePagedSearch, IPagedSearch } from '../interfaces/i-base-search';
import { IPagedResponse } from '../interfaces/i-paged-response';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> {

  protected apiPrefix = this.apiPath.endsWith(".json") ? CONFIG.LOCAL : CONFIG.SERVER;
  public hasAdminSuffixGetAll: boolean = false;
  public hasAdminSuffixGet: boolean = false;

  constructor(
    protected http: HttpClient,
    @Inject("apiPath") protected apiPath: string
  ) {}
  
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiPrefix + this.apiPath);
  }

  getAllPaged(search: IPagedSearch): Observable<IPagedResponse<T>> {
    const basePagedSearch = search as IBasePagedSearch;
    return this.http.get<IPagedResponse<T>>(this.apiPrefix + this.apiPath + `?page=${basePagedSearch.page}&perPage=${basePagedSearch.perPage}&keyword=${basePagedSearch.keyword}`);
  }

  getAllAdmin(): Observable<T[]> {
    if(this.hasAdminSuffixGetAll) {
      return this.http.get<T[]>(this.apiPrefix + this.apiPath + "/admin");
    }
    return this.getAll();
  }

  getAllAdminPaged(search: IPagedSearch): Observable<IPagedResponse<T>> {
    if(this.hasAdminSuffixGetAll) {
      const basePagedSearch = search as IBasePagedSearch;
      return this.http.get<IPagedResponse<T>>(this.apiPrefix + this.apiPath + "/admin" + `?page=${basePagedSearch.page}&perPage=${basePagedSearch.perPage}&keyword=${basePagedSearch.keyword}`);
    }
    return this.getAllPaged(search);
  }

  get(id: number | string): Observable<T> {
    return this.http.get<T>(this.apiPrefix + this.apiPath + "/" + id);
  }

  getAdmin(id: number | string): Observable<T> {
    if(this.hasAdminSuffixGet) {
      return this.http.get<T>(this.apiPrefix + this.apiPath + "/" + id + "/admin");
    }
    return this.get(id);
  }

  create(dataToSend: T): Observable<any> {
    return this.http.post<T>(this.apiPrefix + this.apiPath, dataToSend);
  }

  update(id: number | string, dataToSend: T): Observable<any>  {
    return this.http.put<T>(this.apiPrefix + this.apiPath + "/" + id, dataToSend);
  }

  delete(id: number | string): Observable<any>  {
    return this.http.delete<T>(this.apiPrefix + this.apiPath + "/" + id);
  }

}
