import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPrintCycleComponent } from './input-print-cycle.component';

describe('InputPrintCycleComponent', () => {
  let component: InputPrintCycleComponent;
  let fixture: ComponentFixture<InputPrintCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPrintCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPrintCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
