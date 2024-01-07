import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsTableComponent } from './deals-table.component';

describe('DealsListComponent', () => {
  let component: DealsTableComponent;
  let fixture: ComponentFixture<DealsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DealsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
