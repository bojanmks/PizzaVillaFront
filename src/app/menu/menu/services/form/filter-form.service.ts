import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FilterFormService {

  form: FormGroup = null;

  constructor() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = new FormGroup({
      keyword: new FormControl(''),
      sortOrder: new FormControl('name-asc'),
      categories: new FormArray([])
    });
  }
}
