import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinsurancepolicyComponent } from './updateinsurancepolicy.component';

describe('UpdateinsurancepolicyComponent', () => {
  let component: UpdateinsurancepolicyComponent;
  let fixture: ComponentFixture<UpdateinsurancepolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateinsurancepolicyComponent]
    });
    fixture = TestBed.createComponent(UpdateinsurancepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
