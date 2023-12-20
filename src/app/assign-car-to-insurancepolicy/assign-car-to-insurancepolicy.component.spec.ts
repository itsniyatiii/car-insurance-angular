import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCarToInsurancepolicyComponent } from './assign-car-to-insurancepolicy.component';

describe('AssignCarToInsurancepolicyComponent', () => {
  let component: AssignCarToInsurancepolicyComponent;
  let fixture: ComponentFixture<AssignCarToInsurancepolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignCarToInsurancepolicyComponent]
    });
    fixture = TestBed.createComponent(AssignCarToInsurancepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
