import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWorkTimeComponent } from './input-work-time.component';

describe('InputWorkTimeComponent', () => {
  let component: InputWorkTimeComponent;
  let fixture: ComponentFixture<InputWorkTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWorkTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWorkTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
