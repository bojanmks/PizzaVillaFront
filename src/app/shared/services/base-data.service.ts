import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseDataService {

  constructor() { }

  protected storage: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public isPagedResponse: boolean = true;

  getStorage() {
    return this.storage.asObservable();
  }

  setStorage(storage: any): void {
    this.storage.next(storage);
  }

}
