import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDealFormComponent } from './add-deal-form.component';

describe('AddDealFormComponent', () => {
  let component: AddDealFormComponent;
  let fixture: ComponentFixture<AddDealFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDealFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDealFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with a single deal form.', () => {
    expect(component.dealsForm.length).toBe(1);
  });

  it('should increase the length of the dealsForm array when adding a new deal form.', () => {
    component.addNewDealForm();
    expect(component.dealsForm.length).toBe(2);
  });

  it('should decrease the length of the dealsForm array when removing a deal form.', () => {
    component.addNewDealForm();
    component.removeForm(1);

    expect(component.dealsForm.length).toBe(1);
  });

  it('should emit the correct events when saveNewDeals is called within the allowed limit of deal forms.', () => {
    const emitSpy = jest.spyOn(component.requestSaveNewDeals, 'emit');

    component.saveNewDeals();

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('should not emit events when saveNewDeals is called with the number of deal forms exceeding the allowed limit.', () => {
    const emitSpy = jest.spyOn(component.requestSaveNewDeals, 'emit');

    component.addNewDealForm();
    component.addNewDealForm();
    component.addNewDealForm();
    component.addNewDealForm();
    component.addNewDealForm();

    component.saveNewDeals();

    expect(emitSpy).toHaveBeenCalledTimes(0);
  });

  it('should emit the requestCloseDialog event when closeDialog is called.', () => {
    const emitSpy = jest.spyOn(component.requestCloseDialog, 'emit');

    component.closeDialog();

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('should add a new deal form to the dealsForm array when addNewDealForm is called.', () => {
    const emitSpy = jest.spyOn(component.requestCloseDialog, 'emit');

    component.closeDialog();

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });
});
