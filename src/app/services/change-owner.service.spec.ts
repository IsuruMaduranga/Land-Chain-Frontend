import { TestBed } from '@angular/core/testing';

import { ChangeOwnerService } from './change-owner.service';

describe('ChangeOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeOwnerService = TestBed.get(ChangeOwnerService);
    expect(service).toBeTruthy();
  });
});
