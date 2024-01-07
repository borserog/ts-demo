import { Component, inject } from '@angular/core';

import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { RealEstateDealService } from '../../shared/services/real-estate-deal.service';
import { RealEstateDeal } from '../../shared/models/real-estate-deal';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { AddDealFormComponent } from '../add-deal-form/add-deal-form.component';
import { EditDealFormComponent } from '../edit-deal-form/edit-deal-form.component';

export type DealForm = {
  [index in keyof Partial<RealEstateDeal>]: any[];
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
  realStateDealService = inject(RealEstateDealService);

  closeDialog() {
    this.dialogRef.close();
  }

  saveNewDeals(newDeals: RealEstateDeal[]) {
    this.realStateDealService.addNewDeals(newDeals);
    this.dialogRef.close();
  }

  editDeal(editedDeal: RealEstateDeal) {
    this.realStateDealService.editDeal(editedDeal);
    this.dialogRef.close();
  }
}
