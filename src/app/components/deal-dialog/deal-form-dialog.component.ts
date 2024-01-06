import { Component, inject } from '@angular/core';

import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { RealStateDealService } from '../../shared/services/real-state-deal.service';
import { RealStateDeal } from '../../shared/models/real-state-deal';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { AddDealFormComponent } from '../add-deal-form/add-deal-form.component';
import { EditDealFormComponent } from '../edit-deal-form/edit-deal-form.component';

export type DealForm = {
  [index in keyof Partial<RealStateDeal>]: any[];
};

@Component({
  selector: 'ts-deal-dialog',
  standalone: true,
  imports: [CdkOverlayOrigin, AddDealFormComponent, EditDealFormComponent],
  templateUrl: './deal-form-dialog.component.html',
})
export class DealFormDialogComponent {
  static readonly DEFAULT_FIELD_MAX_LENGTH = 50;
  static readonly DEFAULT_MONEY_FIELD_MAX_LENGTH = 15;
  dialogRef = inject(DialogRef);
  data = inject(DIALOG_DATA);
  realStateDealService = inject(RealStateDealService);

  closeDialog() {
    this.dialogRef.close();
  }

  saveNewDeals(newDeals: RealStateDeal[]) {
    this.realStateDealService.addNewDeals(newDeals);
    this.dialogRef.close();
  }

  editDeal(editedDeal: RealStateDeal) {
    this.realStateDealService.editDeal(editedDeal);
    this.dialogRef.close();
  }
}
