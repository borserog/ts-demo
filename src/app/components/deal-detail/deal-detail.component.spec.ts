import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealDetailComponent } from './deal-detail.component';
import { ActivatedRoute } from '@angular/router';
import { RealEstateDeal } from '../../shared/models/real-estate-deal';
import { Dialog } from '@angular/cdk/dialog';
import { of } from 'rxjs';
import { DealFormDialogComponent } from '../deal-dialog/deal-form-dialog.component';

describe('DealDetailComponent', () => {
  let component: DealDetailComponent;
  let fixture: ComponentFixture<DealDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: jest.fn() },
        {
          provide: Dialog,
          useValue: {
            open: jest.fn(() => {
              return {
                closed: of({}),
              };
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DealDetailComponent);
    component = fixture.componentInstance;
    component.dealId = '1';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize deal', (done) => {
    const realsStateDealServiceSpy = jest.spyOn(
      component.realsStateDealService,
      'getDealById'
    );

    component.deal$.subscribe(() => done());

    expect(realsStateDealServiceSpy).toHaveBeenCalledWith('1');
  });

  it('should open dialog', (done) => {
    component.openDialog(mockedDeal as RealEstateDeal);
    done();

    expect(component.dialog.open).toHaveBeenCalledWith(
      DealFormDialogComponent,
      {
        minWidth: '80vw',
        data: { ...mockedDeal },
      }
    );
  });
});

const mockedDeal = {
  id: '21',
  name: 'Industrial Logistics Center',
  type: 'Lease',
  purchasePrice: 8500000,
  address: '789 Logistics Lane, Industriopolis',
  netOperationalIncome: 670000,
};
