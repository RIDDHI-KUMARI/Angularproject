import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrelationshipmanagementComponent } from './customerrelationshipmanagement.component';

describe('CustomerrelationshipmanagementComponent', () => {
  let component: CustomerrelationshipmanagementComponent;
  let fixture: ComponentFixture<CustomerrelationshipmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerrelationshipmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrelationshipmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
