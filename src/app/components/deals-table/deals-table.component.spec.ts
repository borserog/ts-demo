import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsTableComponent } from './deals-table.component';
import Spy = jasmine.Spy;
import { RealEstateDeal } from '../../shared/models/real-estate-deal';

describe('DealsListComponent', () => {
  let component: DealsTableComponent;
  let fixture: ComponentFixture<DealsTableComponent>;
  let loadDealsSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DealsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loadDealsSpy = jest.spyOn(component.loadDeals$, 'next');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch deal list when component initializes', (done) => {
    const realStateDealsServiceSpy = jest.spyOn(
      component.realStateDealsService,
      'getRealEstateDeals'
    );

    component.dealsList$.subscribe(() => {
      expect(realStateDealsServiceSpy).toHaveBeenCalledTimes(2);
      done();
    });

    component.ngOnInit();

    expect(loadDealsSpy).toHaveBeenCalledWith(null);
  });

  it('should reset filters', (done) => {
    component.filtersForm.setValue({ name: '1234', type: 'Acquisition' });

    component.resetFilters();

    expect(component.filtersForm.get('name')?.value).toBe('');
    expect(component.filtersForm.get('type')?.value).toBe('');
    done();
  });

  it('should route to deal detail', (done) => {
    const navigateSpy = jest.spyOn(component.router, 'navigate');

    component.navigateToDealDetails({ id: '1' } as RealEstateDeal);

    expect(navigateSpy).toHaveBeenCalledWith(['deal', '1']);
    done();
  });
});
