import { Component, inject, OnInit } from '@angular/core';
import { RealStateDealService } from '../../services/real-state-deal.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';

@Component({
  selector: 'ts-deals-list',
  standalone: true,
  imports: [],
  templateUrl: './deals-list.component.html',
  styleUrl: './deals-list.component.css',
})
export class DealsListComponent implements OnInit {
  realStateDealsService = inject(RealStateDealService);

  ngOnInit() {
    /* unsubs */
    this.realStateDealsService
      .getRealStateDeals()
      .pipe(finalize(() => console.log(`destroyed`)))
      .subscribe(console.log);
  }
}
