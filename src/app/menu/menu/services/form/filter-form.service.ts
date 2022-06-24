import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

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
      sortOrder: new FormControl('nameAsc'),
      categories: new FormArray([])
    });
  }

  onCategoryCheckboxClick(event: MatCheckboxChange): void {
    const categoriesFormArray = this.form.get('categories') as FormArray;

    if(event.checked) {
      categoriesFormArray.push(new FormControl(event.source.value));
    } else {
      const index = categoriesFormArray.controls.findIndex(x => x.value === event.source.value);
      categoriesFormArray.removeAt(index);
    }
  }
}
