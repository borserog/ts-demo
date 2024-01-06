import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MainComponent } from '../main/main.component';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe, NgClass, NgPlural, NgPluralCase } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { RealStateDealService } from '../../shared/services/real-state-deal.service';
import { dealTypes, RealStateDeal } from '../../shared/models/real-state-deal';
import { CdkAccordionModule } from '@angular/cdk/accordion';

export type DealForm = {
  [index in keyof Partial<RealStateDeal>]: any[];
};

@Component({
  selector: 'ts-deal-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    CdkOverlayOrigin,
    CdkAccordionModule,
    NgClass,
    NgPlural,
    NgPluralCase,
  ],
  templateUrl: './deal-form-dialog.component.html',
})
export class DealFormDialog implements OnInit {
  dialogRef = inject(DialogRef);
  realStateDealService = inject(RealStateDealService);

  @Output() dialogClosed = new EventEmitter();

  fb = inject(FormBuilder);

  dealForm: DealForm = {
    name: ['', Validators.required],
    address: ['', Validators.required],
    purchasePrice: ['', Validators.required],
    netOperationalIncome: ['', Validators.required],
    type: ['', Validators.required],
  };

  form = this.fb.group({
    dealsForm: this.fb.array([this.fb.group({ ...this.dealForm })]),
  });

  protected readonly MainComponent = MainComponent;
  protected readonly dealTypes = dealTypes;
  protected readonly Object = Object;

  get dealsForm() {
    return this.form.controls['dealsForm'] as FormArray<any>;
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      console.log(this.form.value);
    });
  }

  addNewDealForm() {
    this.dealsForm.push(this.fb.group({ ...this.dealForm }));
  }

  castFormGroup(dealForm: any): FormGroup {
    return dealForm as FormGroup;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveChanges() {
    this.realStateDealService.addNewDeals(
      this.form.controls.dealsForm.value as any
    );
    this.dialogRef.close();
  }
}
