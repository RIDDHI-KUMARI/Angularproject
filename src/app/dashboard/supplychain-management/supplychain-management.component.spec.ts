import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplychainManagementComponent } from './supplychain-management.component';

describe('SupplychainManagementComponent', () => {
  let component: SupplychainManagementComponent;
  let fixture: ComponentFixture<SupplychainManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplychainManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplychainManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
