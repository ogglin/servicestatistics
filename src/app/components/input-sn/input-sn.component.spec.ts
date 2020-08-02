import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSnComponent } from './input-sn.component';

describe('InputSnComponent', () => {
  let component: InputSnComponent;
  let fixture: ComponentFixture<InputSnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
