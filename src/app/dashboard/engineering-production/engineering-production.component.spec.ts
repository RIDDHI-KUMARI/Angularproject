import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringProductionComponent } from './engineering-production.component';

describe('EngineeringProductionComponent', () => {
  let component: EngineeringProductionComponent;
  let fixture: ComponentFixture<EngineeringProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
