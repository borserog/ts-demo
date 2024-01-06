import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RealStateDeal } from '../models/real-state-deal';

@Injectable({
  providedIn: 'root',
})
export class RealStateDealService {
  private readonly idGenerator = this.mockedIdGenerator();

  constructor() {}

  *mockedIdGenerator() {
    let initialId = 8;

    while (true) {
      yield initialId++;
    }
  }

  getRealStateDeals(): Observable<RealStateDeal[]> {
    return of(mockedDeals);
  }

  addNewDeals(deals: RealStateDeal[]) {
    const dealsWithIds: RealStateDeal[] = deals.map((deal) => {
      const id = (this.idGenerator.next().value as number).toString();

      return {
        id,
        ...deal,
      };
    });

    mockedDeals = [...dealsWithIds, ...mockedDeals];
  }

  editDeal(editedDeal: RealStateDeal) {
    const recoveredDeal = mockedDeals.find(
      (deal) => deal?.id === editedDeal.id
    );

    if (recoveredDeal) {
      const newMockedDealsState = mockedDeals.filter(
        (deal) => editedDeal.id !== deal?.id
      );
      debugger;
      mockedDeals = [...newMockedDealsState, editedDeal];
    }
  }
}

let mockedDeals: RealStateDeal[] = [
  {
    id: '1',
    name: 'Green Oasis With Really Big Title',
    type: 'Development',
    purchasePrice: 3500000,
    address: '456 Park Avenue, Natureville',
    netOperationalIncome: 200000,
    capRate: 5.71,
  },
  {
    id: '2',
    name: 'Tech Hub Plaza',
    type: 'Lease',
    purchasePrice: 8000000,
    address: '789 Innovation Blvd, Technocity',
    netOperationalIncome: 600000,
    capRate: 7.5,
  },
  {
    id: '3',
    name: 'Harbor View Tower',
    type: 'Acquisition',
    purchasePrice: 5000000,
    address: '101 Ocean Drive, Coastal Harbor',
    netOperationalIncome: 350000,
    capRate: 7,
  },
  {
    id: '4',
    name: 'Historic Renovation',
    type: 'Development',
    purchasePrice: 2500000,
    address: '321 Heritage Lane, Oldtown',
    netOperationalIncome: 120000,
    capRate: 4.8,
  },
  {
    id: '5',
    name: 'Solar Farm Project',
    type: 'Lease',
    purchasePrice: 6000000,
    address: '567 Sunny Hills Rd, Solarville',
    netOperationalIncome: 400000,
    capRate: 6.67,
  },
  {
    id: '6',
    name: 'Urban Loft Living',
    type: 'Acquisition',
    purchasePrice: 4500000,
    address: '202 Downtown Street, Metroville',
    netOperationalIncome: 280000,
    capRate: 6.22,
  },
  {
    id: '7',
    name: 'Mountain Resort Retreat',
    type: 'Development',
    purchasePrice: 7000000,
    address: '888 Alpine View Dr, Mountainpeak',
    netOperationalIncome: 500000,
    capRate: 7.14,
  },
];
