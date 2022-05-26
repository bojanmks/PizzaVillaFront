import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
    private apiService: ApiService<T>
  ) { }

  ngOnInit(): void {
    this.loadServiceData();
  }

  loadServiceData(): void {
    this.subscription.add(this.apiService.getAll().subscribe({
      next: (data: T[]) => {
        this.serviceData = data;
      },
      error: (err) => {
        console.error(err);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
