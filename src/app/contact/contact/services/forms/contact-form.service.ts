import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BaseFormService } from 'src/app/shared/services/forms/base-form.service';
import { ContactMessageDialogComponent } from '../../components/contact-message-dialog/contact-message-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService extends BaseFormService {

  constructor(
    private dialog: MatDialog
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

  submitForm(): void {
    this.buttonIsDisabled = true;
    document.getElementById('contact-form-spinner').classList.remove('d-none');

    setTimeout(() => {
      document.getElementById('contact-form-spinner').classList.add('d-none');
      this.dialog.open(ContactMessageDialogComponent);
      this.buttonIsDisabled = false;
      this.initializeForm();

      setTimeout(() => {
        this.dialog.closeAll();
      }, 3000);
    }, 2000);
  }
}
