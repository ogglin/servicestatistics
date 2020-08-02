import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInventoryNumComponent } from './input-inventory-num.component';

describe('InputInventoryNumComponent', () => {
  let component: InputInventoryNumComponent;
  let fixture: ComponentFixture<InputInventoryNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputInventoryNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInventoryNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
