import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { SectionCardComponent } from '../../shared/ui/content-card/section-card.component';
import { RealStateDealService } from '../../shared/services/real-state-deal.service';
import { Observable } from 'rxjs';
import { RealStateDeal } from '../../shared/models/real-state-deal';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ts-deal-detail',
  standalone: true,
  imports: [SectionCardComponent, AsyncPipe, JsonPipe, NgIcon, RouterLink],
  templateUrl: './deal-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealDetailComponent implements OnInit {
  @Input('id') dealId!: string;

  deal$!: Observable<RealStateDeal>;
  readonly realsStateDealService = inject(RealStateDealService);

  ngOnInit() {
    this.deal$ = this.realsStateDealService.getDealById(this.dealId);
  }
}
