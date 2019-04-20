import { TestBed } from '@angular/core/testing';

import { AdService } from './ad.service';
import { HttpClientModule } from '@angular/common/http';

describe('AdService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: AdService = TestBed.get(AdService);
    expect(service).toBeTruthy();
  });
});
