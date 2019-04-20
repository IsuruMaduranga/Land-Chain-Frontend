import { TestBed } from '@angular/core/testing';

import { BlockchainService } from './blockchain.service';
import { HttpClientModule } from '@angular/common/http';

describe('BlockchainService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: BlockchainService = TestBed.get(BlockchainService);
    expect(service).toBeTruthy();
  });
});
