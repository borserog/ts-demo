export type RealStateDeal = {
  dealName: string;
  dealType: 'Acquisition' | 'Lease' | 'Development';
  purchasePrice: number;
  address: string;
  netOperationalIncome: number;
  capRate?: number; // (netOperationalIncome/purchasePrice)%
};
