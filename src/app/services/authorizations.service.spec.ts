import { TestBed } from '@angular/core/testing';

import { AuthorizationsService } from './authorizations.service';

describe('AuthorizationsService', () => {
  let service: AuthorizationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
