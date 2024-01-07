import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealTypeBadgeComponent } from './deal-type-badge.component';

describe('DealTypeBadgeComponent', () => {
  let component: DealTypeBadgeComponent;
  let fixture: ComponentFixture<DealTypeBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealTypeBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DealTypeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
