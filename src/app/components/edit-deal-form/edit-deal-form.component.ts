import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { JsonPipe, NgPluralCase } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { dealTypes, RealStateDeal } from '../../shared/models/real-state-deal';
import {
  DealForm,
  DealFormDialogComponent,
} from '../deal-dialog/deal-form-dialog.component';

@Component({
  selector: 'ts-edit-deal-form',
  standalone: true,
  imports: [CdkAccordionModule, NgPluralCase, ReactiveFormsModule, JsonPipe],
  templateUrl: './edit-deal-form.component.html',
})
export class EditDealFormComponent implements OnInit {
  @Input() realStateDeal!: RealStateDeal;
  @Output() requestCloseDialog = new EventEmitter();
  @Output() requestEditDeal = new EventEmitter<RealStateDeal>();
  fb = inject(FormBuilder);
  form!: FormGroup;
  protected readonly Object = Object;
  protected readonly dealTypes = dealTypes;
  protected readonly DealFormDialog = DealFormDialogComponent;

  ngOnInit() {
    this.populateForm();
  }

  populateForm() {
    const { name, address, purchasePrice, netOperationalIncome, type } =
      this.realStateDeal;

    this.form = this.fb.group({
      name: [name, Validators.required],
      address: [address, Validators.required],
      purchasePrice: [purchasePrice.toString(), Validators.required],
      netOperationalIncome: [
        netOperationalIncome.toString(),
        Validators.required,
      ],
      type: [type, Validators.required],
    } as DealForm);
  }

  closeDialog() {
    this.requestCloseDialog.emit();
  }

  editDeal() {
    this.requestEditDeal.emit({
      id: this.realStateDeal.id,
      ...this.form.value,
    } as RealStateDeal);
  }
}
