import { TestBed } from '@angular/core/testing';

import { OrdersTableService } from './orders-table.service';

describe('OrdersTableService', () => {
  let service: OrdersTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
