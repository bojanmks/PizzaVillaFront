import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseFormService } from 'src/app/shared/services/forms/base-form.service';
import { IContactMessage } from '../../interfaces/i-contact-message';
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

    const dataToSend: IContactMessage = {
      email: this.form.get('email').value,
      title: this.form.get('title').value,
      message: this.form.get('message').value
    };

    return this.contactService.create(dataToSend);
  }
}
