export type RealStateDeal = {
  id?: string;
  name: string;
  type: 'Acquisition' | 'Lease' | 'Development';
  purchasePrice: number;
  address: string;
  netOperationalIncome: number;
  capRate?: number; // (netOperationalIncome/purchasePrice)%
};
