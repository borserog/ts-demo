import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgTemplateOutlet, PercentPipe } from '@angular/common';
import { RealStateDeal } from '../../shared/models/real-state-deal';

@Component({
  selector: 'ts-deal-card',
  standalone: true,
  imports: [CurrencyPipe, NgTemplateOutlet, PercentPipe],
  templateUrl: './deal-card.component.html',
  styleUrl: './deal-card.component.css',
})
export class DealCardComponent {
  @Input() deal!: RealStateDeal;
}
