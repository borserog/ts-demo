import { TestBed } from '@angular/core/testing';

import { RealStateDealService } from './real-state-deal.service';

describe('RealStateDealService', () => {
  let service: RealStateDealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealStateDealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
