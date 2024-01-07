import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  Observable,
  startWith,
  switchMap,
  tap,
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
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { SectionCardComponent } from '../../shared/ui/content-card/section-card.component';

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
    NgIcon,
    SectionCardComponent,
  ],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './deals-table.component.html',
})
export class DealsTableComponent implements OnInit {
  readonly dialog = inject(Dialog);
  readonly destroyRef = inject(DestroyRef);
  readonly fb = inject(FormBuilder);
  readonly realStateDealsService = inject(RealStateDealService);
  readonly router = inject(Router);

  readonly Object = Object;
  readonly dealTypes = dealTypes;

  readonly loadDeals$ = new BehaviorSubject<DealFilters | null>(null);
  readonly dealsList$: Observable<RealStateDeal[]> = this.loadDeals$.pipe(
    startWith(null),
    switchMap((filters) =>
      this.realStateDealsService.getRealStateDeals(filters)
    )
  );

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

  openDialog(event: Event, data?: RealStateDeal): void {
    event.stopPropagation();
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

  async navigateToDealDetails(deal: RealStateDeal) {
    await this.router.navigate(['deal', deal.id]);
  }
}
