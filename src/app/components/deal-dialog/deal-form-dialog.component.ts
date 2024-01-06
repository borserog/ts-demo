import { Component, inject } from '@angular/core';

import { DialogRef } from '@angular/cdk/dialog';
import { RealStateDealService } from '../../shared/services/real-state-deal.service';
import { RealStateDeal } from '../../shared/models/real-state-deal';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { AddDealFormComponent } from '../add-deal-form/add-deal-form.component';

export type DealForm = {
  [index in keyof Partial<RealStateDeal>]: any[];
};

@Component({
  selector: 'ts-deal-dialog',
  standalone: true,
  imports: [CdkOverlayOrigin, AddDealFormComponent],
  templateUrl: './deal-form-dialog.component.html',
})
export class DealFormDialog {
  dialogRef = inject(DialogRef);
  realStateDealService = inject(RealStateDealService);

  closeDialog() {
    this.dialogRef.close();
  }

  saveNewDeals(newDeals: RealStateDeal[]) {
    this.realStateDealService.addNewDeals(newDeals);
    this.dialogRef.close();
  }
}
