import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    public registerFormService: RegisterFormService,
    private dialogRef: MatDialogRef<RegisterComponent>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.errorMessage = "";
    this.registerFormService.initializeForm();
  }

  submit(): void {
    SpinnerFunctions.showSpinner();

    this.registerFormService.submitForm().subscribe({
      next: () => {
        SpinnerFunctions.hideSpinner();
        this.registerFormService.buttonIsDisabled = false;

        this.snackBar.open('Your account was created successfully.', 'Close', {
          duration: 3000
        });

        this.dialog.open(LoginComponent, {
          width: 'auto'
        });
        
        this.dialogRef.close();
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        this.registerFormService.buttonIsDisabled = false;

        switch(err.status) {
          case 422:
            this.errorMessage = err.error.errors.map((x: any) => x.error).join('<br/>');
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
