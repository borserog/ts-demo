export type RealStateDeal = {
  id?: string;
  name: string;
  type: (typeof dealTypes)[keyof typeof dealTypes];
  purchasePrice: number;
  address: string;
  netOperationalIncome: number;
  capRate?: number; // (netOperationalIncome/purchasePrice)%
};

export const dealTypes = Object.freeze({
  acquisition: 'Acquisition',
  lease: 'Lease',
  development: 'Development',
} as const);
