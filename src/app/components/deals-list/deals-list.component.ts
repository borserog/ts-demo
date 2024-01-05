import { Component, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize, Observable, startWith, Subject, switchMap, tap } from 'rxjs';
import { RealStateDealService } from '../../shared/services/real-state-deal.service';
import {
  AsyncPipe,
  CurrencyPipe,
  JsonPipe,
  NgTemplateOutlet,
  PercentPipe,
} from '@angular/common';
import { RealStateDeal } from '../../shared/models/real-state-deal';
import { DealCardComponent } from '../deal-card/deal-card.component';

@Component({
  selector: 'ts-deals-list',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgTemplateOutlet,
    CurrencyPipe,
    PercentPipe,
    DealCardComponent,
  ],
  templateUrl: './deals-list.component.html',
  styleUrl: './deals-list.component.css',
})
export class DealsListComponent implements OnInit {
  realStateDealsService = inject(RealStateDealService);

  loadDeals$ = new Subject<void>();
  dealsList$: Observable<RealStateDeal[]> = this.loadDeals$.pipe(
    startWith(null),
    switchMap(() => this.realStateDealsService.getRealStateDeals()),
    tap(console.log)
  );

  ngOnInit() {
    this.loadDeals$.next();
  }
}
