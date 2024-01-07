import { Component } from '@angular/core';
import { SectionCardComponent } from '../../shared/ui/content-card/section-card.component';

@Component({
  selector: 'ts-deal-detail',
  standalone: true,
  imports: [SectionCardComponent],
  templateUrl: './deal-detail.component.html',
  styleUrl: './deal-detail.component.css',
})
export class DealDetailComponent {}
