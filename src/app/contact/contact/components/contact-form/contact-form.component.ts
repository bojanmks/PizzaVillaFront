import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { ContactFormService } from '../../services/forms/contact-form.service';
import { ContactMessageDialogComponent } from '../contact-message-dialog/contact-message-dialog.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('spinner') spinner: ElementRef

  constructor(
    public contactFormService: ContactFormService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.contactFormService.initializeForm();
  }

  submit(): void {
    SpinnerFunctions.showSpinner();
    this.spinner.nativeElement.classList.remove('d-none');

    this.contactFormService.submitForm().subscribe({
      next: () => {
        SpinnerFunctions.hideSpinner();
        this.dialog.open(ContactMessageDialogComponent);
        this.contactFormService.initializeForm();

        setTimeout(() => {
          this.dialog.closeAll();
        }, 3000);

        this.spinner.nativeElement.classList.add('d-none');
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        console.error(err);
      }
    });
  }

}
