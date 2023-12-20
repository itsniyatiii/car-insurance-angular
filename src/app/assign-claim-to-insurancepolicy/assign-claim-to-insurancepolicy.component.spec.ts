import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignClaimToInsurancepolicyComponent } from './assign-claim-to-insurancepolicy.component';

describe('AssignClaimToInsurancepolicyComponent', () => {
  let component: AssignClaimToInsurancepolicyComponent;
  let fixture: ComponentFixture<AssignClaimToInsurancepolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignClaimToInsurancepolicyComponent]
    });
    fixture = TestBed.createComponent(AssignClaimToInsurancepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
