import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DealTypes, RealStateDeal } from '../models/real-state-deal';

export type DealFilters = Partial<{
  name: string;
  type: DealTypes;
}>;

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

  getRealStateDeals(filters: DealFilters | null): Observable<RealStateDeal[]> {
    if (filters) {
      let filteredResults = [...mockedDeals];

      if (filters.name) {
        filteredResults = filteredResults.filter((deal) =>
          deal.name
            .toLowerCase()
            .includes(filters.name?.toLowerCase() as string)
        );
      }
      return of(filteredResults);
    }

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
  {
    id: '8',
    name: 'Lakeside Retreat',
    type: 'Development',
    purchasePrice: 4200000,
    address: '777 Waterfront Blvd, Lakeshore',
    netOperationalIncome: 300000,
    capRate: 7.14,
  },
  {
    id: '9',
    name: 'Downtown Office Tower',
    type: 'Lease',
    purchasePrice: 9000000,
    address: '555 Business Street, City Center',
    netOperationalIncome: 700000,
    capRate: 7.78,
  },
  {
    id: '10',
    name: 'Country Farm Estate',
    type: 'Acquisition',
    purchasePrice: 6000000,
    address: '123 Countryside Lane, Ruralville',
    netOperationalIncome: 450000,
    capRate: 7.5,
  },
  {
    id: '11',
    name: 'Tech Park Innovation Hub',
    type: 'Development',
    purchasePrice: 3800000,
    address: '456 Tech Avenue, Innovation City',
    netOperationalIncome: 250000,
    capRate: 6.58,
  },
  {
    id: '12',
    name: 'Oceanfront Luxury Condos',
    type: 'Lease',
    purchasePrice: 7500000,
    address: '999 Beachfront Drive, Coastal Paradise',
    netOperationalIncome: 550000,
    capRate: 7.33,
  },
  {
    id: '13',
    name: 'Suburban Retail Plaza',
    type: 'Acquisition',
    purchasePrice: 4800000,
    address: '789 Main Street, Suburbia',
    netOperationalIncome: 320000,
    capRate: 6.67,
  },
  {
    id: '14',
    name: 'Mountain View Apartments',
    type: 'Development',
    purchasePrice: 6200000,
    address: '222 Scenic Drive, Mountainview',
    netOperationalIncome: 400000,
    capRate: 6.45,
  },
  {
    id: '15',
    name: 'Cityscape Office Complex',
    type: 'Lease',
    purchasePrice: 8800000,
    address: '456 Urban Avenue, Cityscape',
    netOperationalIncome: 670000,
    capRate: 7.61,
  },
  {
    id: '16',
    name: 'Riverside Commercial Center',
    type: 'Acquisition',
    purchasePrice: 5400000,
    address: '789 River Road, Riverside',
    netOperationalIncome: 380000,
    capRate: 7.04,
  },
  {
    id: '17',
    name: 'Airport Business Park',
    type: 'Development',
    purchasePrice: 7000000,
    address: '101 Skyport Lane, Airville',
    netOperationalIncome: 520000,
    capRate: 7.43,
  },
  {
    id: '18',
    name: 'Golf Course Resort',
    type: 'Lease',
    purchasePrice: 5800000,
    address: '777 Fairway Drive, Golfville',
    netOperationalIncome: 450000,
    capRate: 7.76,
  },
  {
    id: '19',
    name: 'Tech Valley Data Center',
    type: 'Acquisition',
    purchasePrice: 4800000,
    address: '123 Data Street, Tech Valley',
    netOperationalIncome: 320000,
    capRate: 6.67,
  },
  {
    id: '20',
    name: 'Luxury Mall Expansion',
    type: 'Development',
    purchasePrice: 7200000,
    address: '456 Elegance Blvd, Fashion City',
    netOperationalIncome: 550000,
    capRate: 7.64,
  },
  {
    id: '21',
    name: 'Industrial Logistics Center',
    type: 'Lease',
    purchasePrice: 8500000,
    address: '789 Logistics Lane, Industriopolis',
    netOperationalIncome: 670000,
    capRate: 7.88,
  },
];
