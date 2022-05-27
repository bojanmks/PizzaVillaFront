import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseFormService {

  buttonIsDisabled: boolean = false;
  form: FormGroup = null;

  constructor() {
    this.initializeForm();
  }

  validateForm(): void {
    this.form.markAllAsTouched();
  }

  abstract initializeForm(): void;

  abstract submitForm(): Observable<any>;
}
