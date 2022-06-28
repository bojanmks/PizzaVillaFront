import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseFormService } from 'src/app/shared/services/forms/base-form.service';

@Injectable({
  providedIn: 'root'
})
export class MultipleSelectFormService extends BaseFormService {

  constructor() {
    super();
  }

  initializeForm(): void {
    this.form = new FormGroup({
      data: new FormControl(''),
      dataFilter: new FormControl('')
    });
  }

  submitForm(): Observable<any> {
    return null;
  }
}
