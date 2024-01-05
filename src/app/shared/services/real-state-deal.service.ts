import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RealStateDeal } from '../models/real-state-deal';
import { mockedDeals } from './mocked-data';

@Injectable({
  providedIn: 'root',
})
export class RealStateDealService {
  constructor() {}

  getRealStateDeals(): Observable<RealStateDeal[]> {
    return of(mockedDeals);
  }
}
