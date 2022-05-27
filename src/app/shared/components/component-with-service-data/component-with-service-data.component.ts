import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerFunctions } from '../../classes/spinner-functions';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-component-with-service-data',
  templateUrl: './component-with-service-data.component.html',
  styleUrls: ['./component-with-service-data.component.scss']
})
export abstract class ComponentWithServiceDataComponent<T> implements OnInit, OnDestroy {

  public serviceData: T[] = [];

  protected subscription: Subscription = new Subscription();

  constructor(
    private apiService: ApiService<T>,
    @Inject('useSpinner') private useSpinner: boolean = false
  ) { }

  ngOnInit(): void {
    this.loadServiceData();
  }

  loadServiceData(): void {
    if(this.useSpinner)
      SpinnerFunctions.showSpinner();
    this.subscription.add(this.apiService.getAll().subscribe({
      next: (data: T[]) => {
        this.serviceData = data;
        if(this.useSpinner)
          SpinnerFunctions.hideSpinner();
      },
      error: (err) => {
        console.error(err);
        if(this.useSpinner)
          SpinnerFunctions.hideSpinner();
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
