import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  count,
  debounceTime,
  distinctUntilChanged,
  Observable,
  startWith,
  Subject,
  switchMap,
  tap,
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
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
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
  readonly loadDeals$ = new BehaviorSubject<DealFilters | null>(null);
  protected readonly dealType = dealTypes;
  protected readonly Object = Object;
  protected readonly dealTypes = dealTypes;
  private readonly realStateDealsService = inject(RealStateDealService);
  readonly dealsList$: Observable<RealStateDeal[]> = this.loadDeals$.pipe(
    startWith(null),
    switchMap((filters) =>
      this.realStateDealsService.getRealStateDeals(filters)
    )
  );
  private readonly dialog = inject(Dialog);
  private readonly destroyRef = inject(DestroyRef);
  private readonly fb = inject(FormBuilder);
  filtersForm = this.fb.group({
    name: '',
    type: '',
  });

  ngOnInit() {
    this.loadDeals$.next(null);

    this.filtersForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
        tap(console.log)
      )
      .subscribe((filters) => {
        this.loadDeals$.next(filters);
      });
  }

  openDialog(data?: RealStateDeal): void {
    const dialogRef = this.dialog.open(DealFormDialogComponent, {
      minWidth: '80vw',
      data,
    });

    dialogRef.closed.subscribe(() => this.loadDeals$.next(null));
  }

  resetFilters() {
    this.filtersForm.reset({
      name: '',
      type: '',
    });
  }
}
