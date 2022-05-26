import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';
import { BaseFormService } from 'src/app/shared/services/forms/base-form.service';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService extends BaseFormService {

  constructor() {
    super();
  }

  initializeForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      title: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  submitForm(): Observable<boolean> {
    this.buttonIsDisabled = true;

    setTimeout(() => {
      this.buttonIsDisabled = false;
    }, 2000);

    return of(true).pipe(delay(2000));
  }
}
