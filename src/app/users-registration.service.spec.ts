import { TestBed } from '@angular/core/testing';

import { UsersRegistrationService } from './users-registration.service';

describe('UsersRegistrationService', () => {
  let service: UsersRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
