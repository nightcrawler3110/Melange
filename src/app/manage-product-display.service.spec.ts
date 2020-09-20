import { TestBed } from '@angular/core/testing';

import { ManageProductDisplayService } from './manage-product-display.service';

describe('ManageProductDisplayService', () => {
  let service: ManageProductDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageProductDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
