import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWorksComponent } from './input-works.component';

describe('InputWorksComponent', () => {
  let component: InputWorksComponent;
  let fixture: ComponentFixture<InputWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
