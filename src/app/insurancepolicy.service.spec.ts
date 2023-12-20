import { TestBed } from '@angular/core/testing';

import { InsurancepolicyService } from './insurancepolicy.service';

describe('InsurancepolicyService', () => {
  let service: InsurancepolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsurancepolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
