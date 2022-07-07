import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { LoginFormService } from '../../services/forms/login-form.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string = "";

  constructor(
    public loginFormService: LoginFormService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.message = "";
    this.loginFormService.initializeForm();
  }

  submit(): void {
    SpinnerFunctions.showSpinner();

    this.loginFormService.submitForm().subscribe({
      next: (data) => {
        SpinnerFunctions.hideSpinner();
        this.loginFormService.initializeForm();
        this.loginFormService.buttonIsDisabled = false;
        this.dialogRef.close();
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        this.loginFormService.buttonIsDisabled = false;
        
        switch(err.status) {
          case 401:
            this.message = err.error.message;
            break;
          case 422:
            this.message = err.error.errors.map((x: any) => x.error).join('<br/>');
            break;
          case 500:
            this.message = "We encountered an error. Please try again later.";
            break;
          default:
            this.message = "";
        }
      }
    });
  }

  redirectToRegister(): void {
    this.dialogRef.close();
    this.dialog.open(RegisterComponent, {
      width: 'auto'
    });
  }

}
