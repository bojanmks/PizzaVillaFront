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

  errorMessage: string = "";

  @ViewChild('spinner') spinner: ElementRef

  constructor(
    public contactFormService: ContactFormService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.errorMessage = "";
    this.contactFormService.initializeForm();
  }

  submit(): void {
    SpinnerFunctions.showSpinner();
    this.spinner.nativeElement.classList.remove('d-none');

    this.contactFormService.submitForm().subscribe({
      next: () => {
        SpinnerFunctions.hideSpinner();
        this.contactFormService.buttonIsDisabled = false;
        this.dialog.open(ContactMessageDialogComponent);
        this.contactFormService.initializeForm();
        this.errorMessage = "";

        setTimeout(() => {
          this.dialog.closeAll();
        }, 3000);

        this.spinner.nativeElement.classList.add('d-none');
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        this.contactFormService.buttonIsDisabled = false;
        this.spinner.nativeElement.classList.add('d-none');
        
        switch(err.status) {
          case 422:
            this.errorMessage = err.message;
            break;
          case 500:
            this.errorMessage = "We encountered an error. Please try again.";
            break;
          default:
            this.errorMessage = "";
        }
      }
    });
  }

}
