import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputScannerCycleComponent } from './input-scanner-cycle.component';

describe('InputScannerCycleComponent', () => {
  let component: InputScannerCycleComponent;
  let fixture: ComponentFixture<InputScannerCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputScannerCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputScannerCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
