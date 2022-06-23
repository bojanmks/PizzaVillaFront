import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BaseFormService } from 'src/app/shared/services/forms/base-form.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService extends BaseFormService {

  constructor(
    private authService: AuthService
  ) {
    super();
  }

  initializeForm(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern(/^(?=[a-zA-Z0-9\._]{3,12}$)(?!.*[_.]{2})[^_.].*[^_.]$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\@\$\!\%\*\?\&\#])[A-Za-z\d\@\$\!\%\*\?\&]{8,}$/)])
    });
  }

  submitForm(): Observable<any> {
    this.buttonIsDisabled = true;
    return this.authService.register(this.form.get('email').value, this.form.get('password').value, this.form.get('username').value);
  }
}
