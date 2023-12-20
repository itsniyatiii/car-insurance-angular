import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPaymentToCarComponent } from './assign-payment-to-car.component';

describe('AssignPaymentToCarComponent', () => {
  let component: AssignPaymentToCarComponent;
  let fixture: ComponentFixture<AssignPaymentToCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignPaymentToCarComponent]
    });
    fixture = TestBed.createComponent(AssignPaymentToCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
