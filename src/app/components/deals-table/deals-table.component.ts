import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  count,
  debounceTime,
  distinctUntilChanged,
  Observable,
  startWith,
  Subject,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import {
  DealFilters,
  RealStateDealService,
} from '../../shared/services/real-state-deal.service';
import {
  AsyncPipe,
  CurrencyPipe,
  JsonPipe,
  NgPlural,
  NgPluralCase,
  NgTemplateOutlet,
  PercentPipe,
} from '@angular/common';
import { dealTypes, RealStateDeal } from '../../shared/models/real-state-deal';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { DealFormDialogComponent } from '../deal-dialog/deal-form-dialog.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'ts-deals-table',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgTemplateOutlet,
    CurrencyPipe,
    PercentPipe,
    DialogModule,
    ReactiveFormsModule,
    NgPlural,
    NgPluralCase,
  ],
  templateUrl: './deals-table.component.html',
})
export class DealsTableComponent implements OnInit {
  realStateDealsService = inject(RealStateDealService);
  dialog = inject(Dialog);
  destroyRef = inject(DestroyRef);

  loadDeals$ = new Subject<void>();
  dealsFilters$ = new BehaviorSubject<DealFilters | null>(null);
  dealsList$: Observable<RealStateDeal[]> = this.loadDeals$.pipe(
    startWith(null),
    withLatestFrom(this.dealsFilters$),
    switchMap(([, filters]) =>
      this.realStateDealsService.getRealStateDeals(filters)
    )
  );
  dealNameForm = new FormControl();

  protected readonly dealType = dealTypes;
  protected readonly count = count;

  ngOnInit() {
    this.loadDeals$.next();

    this.dealNameForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
        withLatestFrom(this.dealsFilters$)
      )
      .subscribe(([search, filters]) => {
        this.dealsFilters$.next({ ...filters, name: search });
        this.loadDeals$.next();
      });
  }

  openDialog(data?: RealStateDeal): void {
    const dialogRef = this.dialog.open(DealFormDialogComponent, {
      minWidth: '80vw',
      data,
    });

    dialogRef.closed.subscribe(() => this.loadDeals$.next());
  }
}
