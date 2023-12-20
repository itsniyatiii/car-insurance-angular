import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancepolicyListComponent } from './insurancepolicy-list.component';

describe('InsurancepolicyListComponent', () => {
  let component: InsurancepolicyListComponent;
  let fixture: ComponentFixture<InsurancepolicyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsurancepolicyListComponent]
    });
    fixture = TestBed.createComponent(InsurancepolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
