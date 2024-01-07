import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealFormDialogComponent } from './deal-form-dialog.component';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { RealStateDealService } from '../../shared/services/real-state-deal.service';
import { RealStateDeal } from '../../shared/models/real-state-deal';

describe('DealFormDialogComponent', () => {
  let component: DealFormDialogComponent;
  let fixture: ComponentFixture<DealFormDialogComponent>;
  const dialogRefMock = {
    close: jest.fn(),
  };
  const realStateDealServiceMock = {
    addNewDeals: jest.fn(),
    editDeal: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [DealFormDialogComponent],
      providers: [
        {
          provide: RealStateDealService,
          useValue: realStateDealServiceMock,
        },
        {
          provide: DialogRef,
          useValue: dialogRefMock,
        },
        {
          provide: DIALOG_DATA,
          useValue: {
            id: '4',
            name: 'Historic Renovation',
            type: 'Development',
            purchasePrice: 2500000,
            address: '321 Heritage Lane, Oldtown',
            netOperationalIncome: 120000,
            capRate: 4.8,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DealFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog on closeDialog call', () => {
    component.closeDialog();
    expect(dialogRefMock.close).toHaveBeenCalled();
  });

  it('should save new deals and close dialog on saveNewDeals call', () => {
    const newDeals: RealStateDeal[] = [
      {
        name: 'Tech Park Innovation Hub',
        type: 'Development',
        purchasePrice: 3800000,
        address: '456 Tech Avenue, Innovation City',
        netOperationalIncome: 250000,
      },
      {
        name: 'Oceanfront Luxury Condos',
        type: 'Lease',
        purchasePrice: 7500000,
        address: '999 Beachfront Drive, Coastal Paradise',
        netOperationalIncome: 550000,
      },
    ];

    component.saveNewDeals(newDeals);
    expect(realStateDealServiceMock.addNewDeals).toHaveBeenCalledWith(newDeals);
    expect(dialogRefMock.close).toHaveBeenCalled();
  });

  it('should edit deal and close dialog on editDeal call', () => {
    const editedDeal: RealStateDeal = {
      name: 'Historic',
      type: 'Development',
      purchasePrice: 2500000,
      address: '321 Heritage',
      netOperationalIncome: 120000,
    };
    component.editDeal(editedDeal);
    expect(realStateDealServiceMock.editDeal).toHaveBeenCalledWith(editedDeal);
    expect(dialogRefMock.close).toHaveBeenCalled();
  });
});
