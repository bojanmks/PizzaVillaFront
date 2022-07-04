import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/shared/constants/apis';
import { IPagedDateSearch, IPagedSearch } from 'src/app/shared/interfaces/i-base-search';
import { IPagedResponse } from 'src/app/shared/interfaces/i-paged-response';
import { ApiService } from 'src/app/shared/services/api.service';
import { IAuditLog } from '../../interfaces/i-audit-log';

@Injectable({
  providedIn: 'root'
})
export class AuditLogService extends ApiService<IAuditLog> {

  constructor(
    http: HttpClient
  ) {
    super(http, API.auditLog);
  }

  override getAllPaged(search: IPagedSearch): Observable<IPagedResponse<IAuditLog>> {
    const pagedDateSearch: IPagedDateSearch = search as IPagedDateSearch;

    let queryString = `?page=${pagedDateSearch.page}&perPage=${pagedDateSearch.perPage}`;

    if(pagedDateSearch.dateFrom) {
      queryString += `&dateFrom=${pagedDateSearch.dateFrom}`;
    }

    if(pagedDateSearch.dateTo) {
      queryString += `&dateTo=${pagedDateSearch.dateTo}`;
    }

    return this.http.get<IPagedResponse<IAuditLog>>(this.apiPrefix + this.apiPath + queryString);
  }
}
