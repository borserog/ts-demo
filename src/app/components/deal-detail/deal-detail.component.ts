import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { SectionCardComponent } from '../../shared/ui/content-card/section-card.component';
import { RealEstateDealService } from '../../shared/services/real-estate-deal.service';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { RealEstateDeal } from '../../shared/models/real-estate-deal';
import {
  AsyncPipe,
  CurrencyPipe,
  JsonPipe,
  NgTemplateOutlet,
  PercentPipe,
} from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';
import { DealTypeBadgeComponent } from '../../shared/ui/deal-type-badge/deal-type-badge.component';
import { DealFormDialogComponent } from '../deal-dialog/deal-form-dialog.component';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'ts-deal-detail',
  standalone: true,
  imports: [
    SectionCardComponent,
    AsyncPipe,
    JsonPipe,
    NgIcon,
    RouterLink,
    DealTypeBadgeComponent,
    CurrencyPipe,
    PercentPipe,
    NgTemplateOutlet,
  ],
  templateUrl: './deal-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealDetailComponent implements OnInit {
  @Input('id') dealId!: string;

  readonly dialog = inject(Dialog);

  deal$!: Observable<RealEstateDeal>;
  readonly realsStateDealService = inject(RealEstateDealService);
  readonly loadDeal$ = new Subject<string>();

  ngOnInit() {
    this.deal$ = this.loadDeal$.pipe(
      startWith(this.dealId),
      switchMap((dealId) => {
        return this.realsStateDealService.getDealById(dealId);
      })
    );
  }

  openDialog(data: RealEstateDeal): void {
    const dialogRef = this.dialog.open(DealFormDialogComponent, {
      minWidth: '80vw',
      data,
    });

    dialogRef.closed.subscribe(() => this.loadDeal$.next(this.dealId));
  }
}
