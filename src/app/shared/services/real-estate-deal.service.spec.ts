import { TestBed } from '@angular/core/testing';

import { RealEstateDealService } from './real-estate-deal.service';

describe('RealEstateDealService', () => {
  let service: RealEstateDealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEstateDealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
