export type RealEstateDeal = {
  id?: string;
  name: string;
  type: DealTypes;
  purchasePrice: number;
  address: string;
  netOperationalIncome: number;
  capRate?: number; // (netOperationalIncome/purchasePrice)%
};

export type DealTypes = (typeof dealTypes)[keyof typeof dealTypes];

export const dealTypes = Object.freeze({
  acquisition: 'Acquisition',
  lease: 'Lease',
  development: 'Development',
} as const);
