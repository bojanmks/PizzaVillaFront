import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseFormService {

  form: FormGroup = null;

  constructor() {
  }

  validateForm(): void {
    this.form.markAllAsTouched();
  }

  abstract initializeForm(): void;
}
