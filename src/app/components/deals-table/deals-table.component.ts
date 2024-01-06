import { Component, inject, OnInit } from '@angular/core';
import { Observable, startWith, Subject, switchMap, tap } from 'rxjs';
import { RealStateDealService } from '../../shared/services/real-state-deal.service';
import {
  AsyncPipe,
  CurrencyPipe,
  JsonPipe,
  NgTemplateOutlet,
  PercentPipe,
} from '@angular/common';
import { dealTypes, RealStateDeal } from '../../shared/models/real-state-deal';
import { DealCardComponent } from '../deal-card/deal-card.component';
import { Dialog } from '@angular/cdk/dialog';
import { DealFormDialog } from '../deal-dialog/deal-form-dialog.component';

@Component({
  selector: 'ts-deals-table',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgTemplateOutlet,
    CurrencyPipe,
    PercentPipe,
    DealCardComponent,
  ],
  templateUrl: './deals-table.component.html',
})
export class DealsTableComponent implements OnInit {
  realStateDealsService = inject(RealStateDealService);
  dialog = inject(Dialog);

  loadDeals$ = new Subject<void>();
  dealsList$: Observable<RealStateDeal[]> = this.loadDeals$.pipe(
    startWith(null),
    switchMap(() => this.realStateDealsService.getRealStateDeals()),
    tap(console.log)
  );
  protected readonly dealType = dealTypes;

  ngOnInit() {
    this.loadDeals$.next();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DealFormDialog, {
      minWidth: '80vw',
    });

    dialogRef.closed.subscribe(() => this.loadDeals$.next());
  }
}
