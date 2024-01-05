import { Route } from '@angular/router';
import { DealsListComponent } from './components/deals-list/deals-list.component';
import { DealDetailComponent } from './components/deal-detail/deal-detail.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: DealsListComponent,
  },
  {
    path: 'deal/:id',
    component: DealDetailComponent,
  },
];
