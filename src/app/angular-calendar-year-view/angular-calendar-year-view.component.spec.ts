import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCalendarYearViewComponent } from './angular-calendar-year-view.component';

describe('AngularCalendarYearViewComponent', () => {
  let component: AngularCalendarYearViewComponent;
  let fixture: ComponentFixture<AngularCalendarYearViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCalendarYearViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCalendarYearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
