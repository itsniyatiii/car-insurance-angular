import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInsurancepolicyToUserComponent } from './assign-insurancepolicy-to-user.component';

describe('AssignInsurancepolicyToUserComponent', () => {
  let component: AssignInsurancepolicyToUserComponent;
  let fixture: ComponentFixture<AssignInsurancepolicyToUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignInsurancepolicyToUserComponent]
    });
    fixture = TestBed.createComponent(AssignInsurancepolicyToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
