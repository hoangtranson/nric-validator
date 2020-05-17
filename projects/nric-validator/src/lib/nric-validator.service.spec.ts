import { TestBed } from '@angular/core/testing';

import { NricValidatorService } from './nric-validator.service';

describe('NricValidatorService', () => {
  let service: NricValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NricValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
