import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecarComponent } from './updatecar.component';

describe('UpdatecarComponent', () => {
  let component: UpdatecarComponent;
  let fixture: ComponentFixture<UpdatecarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecarComponent]
    });
    fixture = TestBed.createComponent(UpdatecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
