import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, share } from 'rxjs';
import { ApiService } from '../api.service';
import { BaseDataService } from '../base-data.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseAdminFormService {

  constructor(
    protected apiService: ApiService<any>,
    private matDialog: MatDialog
  ) { }

  protected abstract form: FormGroup;
  protected abstract initializeForm(): void;
  protected abstract prepareDataToSend(): any;

  validateForm(): void {
    this.form.markAllAsTouched();
  }

  submitInsert(dataService?: BaseDataService): Observable<any> {
    const dataToSend = this.prepareDataToSend();
    const request = this.apiService.create(dataToSend).pipe(share());
    this.handleRequest(request, dataService);
    return request;
  }

  submitUpdate(id: number | string, dataService?: BaseDataService): Observable<any> {
    const dataToSend = this.prepareDataToSend();
    const request = this.apiService.update(id, dataToSend).pipe(share());
    this.handleRequest(request, dataService);
    return request;
  }

  handleRequest(request: Observable<any>, dataService: BaseDataService) {
    request.subscribe({
      next: (data) => {
        this.matDialog.closeAll();

        if (dataService) {
          this.apiService.getAll().subscribe({
            next: (allData) => {
              dataService.setStorage(allData);
            }
          })
        }
      }
    })
  }


}
