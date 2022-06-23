import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { LoginFormService } from '../../services/forms/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string = "";

  constructor(
    public loginFormService: LoginFormService,
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
        this.dialog.closeAll();
      },
      error: (err) => {
        SpinnerFunctions.hideSpinner();
        this.loginFormService.buttonIsDisabled = false;
        
        switch(err.status) {
          case 401:
            this.message = "User with those credentials doesn't exist.";
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

}
