import { Route } from '@angular/router';
import { DealDetailComponent } from './components/deal-detail/deal-detail.component';
import { DealsTableComponent } from './components/deals-table/deals-table.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full',
  },
  {
    path: 'listing',
    component: DealsTableComponent,
  },
  {
    path: 'deal/:id',
    component: DealDetailComponent,
  },
];
