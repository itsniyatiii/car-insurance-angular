import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinsurancepolicyComponent } from './createinsurancepolicy.component';

describe('CreateinsurancepolicyComponent', () => {
  let component: CreateinsurancepolicyComponent;
  let fixture: ComponentFixture<CreateinsurancepolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateinsurancepolicyComponent]
    });
    fixture = TestBed.createComponent(CreateinsurancepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
