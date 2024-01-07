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
  RealEstateDealService,
} from '../../shared/services/real-estate-deal.service';
import {
  AsyncPipe,
  CurrencyPipe,
  JsonPipe,
  NgPlural,
  NgPluralCase,
  NgTemplateOutlet,
  PercentPipe,
} from '@angular/common';
import {
  dealTypes,
  RealEstateDeal,
} from '../../shared/models/real-estate-deal';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { DealFormDialogComponent } from '../deal-dialog/deal-form-dialog.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { SectionCardComponent } from '../../shared/ui/content-card/section-card.component';
import { DealTypeBadgeComponent } from '../../shared/ui/deal-type-badge/deal-type-badge.component';

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
    DealTypeBadgeComponent,
  ],
  providers: [],
  templateUrl: './deals-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealsTableComponent implements OnInit {
  readonly dialog = inject(Dialog);
  readonly destroyRef = inject(DestroyRef);
  readonly fb = inject(FormBuilder);
  readonly realStateDealsService = inject(RealEstateDealService);
  readonly router = inject(Router);

  readonly Object = Object;
  readonly dealTypes = dealTypes;

  readonly loadDeals$ = new BehaviorSubject<DealFilters | null>(null);
  readonly dealsList$: Observable<RealEstateDeal[]> = this.loadDeals$.pipe(
    startWith(null),
    switchMap((filters) =>
      this.realStateDealsService.getRealEstateDeals(filters)
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
        takeUntilDestroyed(this.destroyRef),
        debounceTime(500),
        distinctUntilChanged(),
        tap(console.log)
      )
      .subscribe((filters) => {
        this.loadDeals$.next(filters);
      });
  }

  openDialog(event: Event, data?: RealEstateDeal): void {
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

  async navigateToDealDetails(deal: RealEstateDeal) {
    await this.router.navigate(['deal', deal.id]);
  }
}
