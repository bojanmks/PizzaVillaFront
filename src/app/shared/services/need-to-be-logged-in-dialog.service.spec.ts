import { TestBed } from '@angular/core/testing';

import { NeedToBeLoggedInDialogService } from './need-to-be-logged-in-dialog.service';

describe('NeedToBeLoggedInDialogService', () => {
  let service: NeedToBeLoggedInDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeedToBeLoggedInDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
