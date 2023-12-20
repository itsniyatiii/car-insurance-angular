import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateclaimComponent } from './createclaim.component';

describe('CreateclaimComponent', () => {
  let component: CreateclaimComponent;
  let fixture: ComponentFixture<CreateclaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateclaimComponent]
    });
    fixture = TestBed.createComponent(CreateclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
