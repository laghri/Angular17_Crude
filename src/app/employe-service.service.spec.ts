import { TestBed } from '@angular/core/testing';

import { EmployeServiceService } from './employe-service.service';

describe('EmployeServiceService', () => {
  let service: EmployeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
