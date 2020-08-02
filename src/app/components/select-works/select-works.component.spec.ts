import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWorksComponent } from './select-works.component';

describe('SelectWorksComponent', () => {
  let component: SelectWorksComponent;
  let fixture: ComponentFixture<SelectWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
