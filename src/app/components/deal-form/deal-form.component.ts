import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MainComponent } from '../main/main.component';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ts-deal-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './deal-form.component.html',
  styleUrl: './deal-form.component.css',
})
export class DealFormComponent implements OnInit {
  @Output() dialogClosed = new EventEmitter();

  fb = inject(FormBuilder);

  dealForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    price: ['', Validators.required],
    noi: ['', Validators.required],
  });

  form = this.fb.group({
    dealsForm: this.fb.array([this.dealForm]),
  });

  protected readonly MainComponent = MainComponent;
  protected readonly document = document;
  protected readonly JSON = JSON;

  get dealsForm() {
    return this.form.controls['dealsForm'] as FormArray<any>;
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      console.log(this.form.value);
    });
  }

  addNewDealForm() {
    this.dealsForm.push(this.dealForm);
  }

  castFormGroup(dealForm: any): FormGroup {
    return dealForm as FormGroup;
  }

  closeDialog(dialog: HTMLDialogElement) {
    dialog.close();
    this.form = this.fb.group({
      dealsForm: this.fb.array([this.dealForm]),
    });
  }
}
