import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BaseFormService } from 'src/app/shared/services/forms/base-form.service';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService extends BaseFormService {

  constructor(
    private authService: AuthService
  ) {
    super();
  }

  initializeForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\@\$\!\%\*\?\&\#])[A-Za-z\d@$!%*?&]{8,}$/)])
    });
  }

  submitForm(): Observable<any> {
    this.buttonIsDisabled = true;
    return this.authService.login(this.form.get('email').value, this.form.get('password').value);
  }
}
