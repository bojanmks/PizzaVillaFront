import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseFormService } from 'src/app/shared/services/forms/base-form.service';
import { ContactService } from '../contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService extends BaseFormService {

  constructor(
    private contactService: ContactService
  ) {
    super();
  }

  initializeForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      title: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  submitForm(): Observable<any> {
    this.buttonIsDisabled = true;
    return this.contactService.sendMessage(this.form.get('email').value, this.form.get('title').value, this.form.get('message').value);
  }
}
