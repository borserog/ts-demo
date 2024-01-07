import { Component, Input } from '@angular/core';
import { DealTypes, dealTypes } from '../../models/real-estate-deal';

@Component({
  selector: 'ts-deal-type-badge',
  standalone: true,
  imports: [],
  template: `
    <div class="[&>small]:text-xs text-bold">
      @switch (dealType) { @case (dealTypes.acquisition) {
      <small class="badge badge-success text-green-900">{{ dealType }}</small>
      } @case (dealTypes.lease) {
      <small class="badge badge-info text-blue-800">{{ dealType }}</small>
      } @case (dealTypes.development) {
      <small class="badge badge-warning text-yellow-900">{{ dealType }}</small>
      } @default {
      <small class="badge badge-ghost">{{ dealType }}</small>
      } }
    </div>
  `,
  styles: ``,
})
export class DealTypeBadgeComponent {
  @Input() dealType!: DealTypes;

  protected readonly dealTypes = dealTypes;
}
