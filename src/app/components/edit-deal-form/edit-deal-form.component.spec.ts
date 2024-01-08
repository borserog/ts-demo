import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDealFormComponent } from './edit-deal-form.component';

describe('EditDealFormComponent', () => {
  let component: EditDealFormComponent;
  let fixture: ComponentFixture<EditDealFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDealFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditDealFormComponent);
    component = fixture.componentInstance;
    component.realStateDeal = {
      id: '19',
      name: 'Tech Valley Data Center',
      type: 'Acquisition',
      purchasePrice: 4800000,
      address: '123 Data Street, Tech Valley',
      netOperationalIncome: 320000,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('populate form when component initializes', () => {
    component.ngOnInit();

    expect(component.form.get('name')?.value).toBe(
      component.realStateDeal.name
    );
    expect(component.form.get('address')?.value).toBe(
      component.realStateDeal.address
    );
    expect(component.form.get('purchasePrice')?.value).toBe(
      component.realStateDeal.purchasePrice.toString()
    );
    expect(component.form.get('netOperationalIncome')?.value).toBe(
      component.realStateDeal.netOperationalIncome.toString()
    );
    expect(component.form.get('type')?.value).toBe(
      component.realStateDeal.type
    );
  });

  it('should request dialog to be closed', () => {
    const spy = jest.spyOn(component.requestCloseDialog, 'emit');

    component.closeDialog();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should request deal to be edited', () => {
    const spy = jest.spyOn(component.requestEditDeal, 'emit');

    component.editDeal();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("shouldn't request deal to be edited if form is invalid", () => {
    const spy = jest.spyOn(component.requestEditDeal, 'emit');

    component.form.get('type')?.setValue('', { emitEvent: false });

    component.editDeal();

    expect(spy).toHaveBeenCalledTimes(0);
  });
});
