import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { RegisterFormService } from '../../services/forms/register-form.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorMessage: string = "";
  successMessage: string = "";

  constructor(
    public registerFormService: RegisterFormService,
    private dialogRef: MatDialogRef<RegisterComponent>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.errorMessage = "";
    this.successMessage = "";
    this.registerFormService.initializeForm();
  }

  submit(): void {
    SpinnerFunctions.showSpinner();

    this.registerFormService.submitForm().subscribe({
      next: () => {
        SpinnerFunctions.hideSpinner();
        this.registerFormService.initializeForm();
        this.registerFormService.buttonIsDisabled = false;
        this.successMessage = "Your account was created successfully.";
        this.errorMessage = "";
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        this.registerFormService.buttonIsDisabled = false;
        
        this.successMessage = "";
        
        switch(err.status) {
          case 422:
            this.errorMessage = err.message;
            break;
          case 500:
            this.errorMessage = "We encountered an error. Please try again later.";
            break;
          default:
            this.errorMessage = "";
        }
      }
    });
  }

  redirectToLogin(): void {
    this.dialogRef.close();
    this.dialog.open(LoginComponent, {
      width: 'auto'
    });
  }

}
