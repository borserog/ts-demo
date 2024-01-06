import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealFormDialog } from './deal-form-dialog.component';

describe('DealFormDialogComponent', () => {
  let component: DealFormDialog;
  let fixture: ComponentFixture<DealFormDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealFormDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(DealFormDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
