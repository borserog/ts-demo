import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDealFormComponent } from './edit-deal-form.component';

describe('EditDealFormComponent', () => {
  let component: EditDealFormComponent;
  let fixture: ComponentFixture<EditDealFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDealFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDealFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
