import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllListComponent } from './view-all-list.component';

describe('ViewAllListComponent', () => {
  let component: ViewAllListComponent;
  let fixture: ComponentFixture<ViewAllListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
