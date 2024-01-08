import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  dealTypes,
  RealEstateDeal,
} from '../../shared/models/real-estate-deal';
import { JsonPipe, NgClass, NgPlural, NgPluralCase } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  DealForm,
  DealFormDialogComponent,
} from '../deal-dialog/deal-form-dialog.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'ts-add-deal-dialog',
  standalone: true,
  imports: [
    NgPlural,
    ReactiveFormsModule,
    CdkAccordionModule,
    NgClass,
    NgPluralCase,
    JsonPipe,
    NgIcon,
  ],
  templateUrl: './add-deal-form.component.html',
})
export class AddDealFormComponent {
  @Output() requestCloseDialog = new EventEmitter();
  @Output() requestSaveNewDeals = new EventEmitter<RealEstateDeal[]>();
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
  protected readonly dealTypes = dealTypes;
  protected readonly Object = Object;
  protected readonly DealFormDialog = DealFormDialogComponent;

  get dealsForm() {
    return this.form.controls['dealsForm'] as FormArray<any>;
  }

  closeDialog() {
    this.requestCloseDialog.emit();
  }

  castFormGroup(dealForm: unknown): FormGroup {
    return dealForm as FormGroup;
  }

  saveNewDeals() {
    if (this.dealsForm.length > 5 || this.dealsForm.invalid) return;

    this.requestSaveNewDeals.emit(
      this.form.controls.dealsForm.value as unknown as RealEstateDeal[]
    );
  }

  addNewDealForm() {
    this.dealsForm.push(this.fb.group({ ...this.dealForm }));
  }

  removeForm(index: number) {
    this.dealsForm.removeAt(index);
  }
}
