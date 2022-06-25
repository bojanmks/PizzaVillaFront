import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseFormService } from 'src/app/shared/services/forms/base-form.service';
import { ICreateOrder } from '../../interfaces/i-order';
import { OrderService } from '../order.service';

@Injectable({
  providedIn: 'root'
})
export class OrderFormService extends BaseFormService {

  constructor(
    private orderService: OrderService
  ) {
    super();
  }

  initializeForm(): void {
    this.buttonIsDisabled = false;
    this.form = new FormGroup({
      deliveryAddress: new FormControl('', [Validators.required, Validators.pattern(/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/)])
    });
  }

  submitForm(): Observable<any> {
    const orderObj: ICreateOrder = {
      deliveryAddress: this.form.get('deliveryAddress').value
    };

    this.buttonIsDisabled = true;
    return this.orderService.create(orderObj);
  }
}
