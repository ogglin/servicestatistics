import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStatusListComponent } from './show-status-list.component';

describe('ShowStatusListComponent', () => {
  let component: ShowStatusListComponent;
  let fixture: ComponentFixture<ShowStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
