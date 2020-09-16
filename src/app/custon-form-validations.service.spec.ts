import { TestBed } from '@angular/core/testing';

import { CustonFormValidations } from './custon-form-validations.service';

describe('CustonFormValidationsService', () => {
  let service: CustonFormValidations;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustonFormValidations);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
