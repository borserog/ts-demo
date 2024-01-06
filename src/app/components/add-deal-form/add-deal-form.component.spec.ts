import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDealFormComponent } from './add-deal-form.component';

describe('AddDealFormComponent', () => {
  let component: AddDealFormComponent;
  let fixture: ComponentFixture<AddDealFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDealFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDealFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
