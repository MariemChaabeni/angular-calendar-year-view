import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import * as cloneDeep from "lodash/cloneDeep";

@Component({
  selector: 'angular-calendar-year-view',
  templateUrl: './angular-calendar-year-view.component.html',
  styleUrls: ['./angular-calendar-year-view.component.scss']
})
export class AngularCalendarYearViewComponent implements OnInit {

  @Input()
  events = [];
  @Input()
  test:boolean;
  @Input()
  viewDate: Date = new Date();
  @Output()
  eventClicked = new EventEmitter<any>();
  color = "primary";
  mode = "indeterminate";
  value = 50;
  bufferValue = 75;
  dt: Date = new Date();

  loader: any = false;
  yesEvent: any = false;
  days: any = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  dayindex: any;
  daydetails: any = {};
  year: any = 2018;
  calendar: any = [];
  spinner: any = true;

  constructor() {}

  ngOnInit() {
    
    this.initCalendar(this.viewDate);
  }
  initCalendar(date) {
    this.year = date.getFullYear();
    this.calendar = [];
    this.spinner = true;
    for (let index = 0; index < 12; index++) {
      this.calendar.push({
        date: new Date(this.year, index + 1, 0),
        days: this.generateCalendar(index + 1, this.year)
      });
    }
    let self = this;
    setTimeout(() => {
      self.spinner = false;
    }, 2000);
  }
  generateCalendar(month, year) {
    let monthList = [];
    let nbweeks = this.getNbWeeks(month, year);
    let dayone = new Date(year, month - 1, 1).getDay();
    let nbdaysMonth = new Date(year, month, 0).getDate();
    let lastdayindex = new Date(year, month - 1, nbdaysMonth).getDay();
    let lastday = 7;
    let day = 1;
    let today = new Date().toDateString();

    for (let indexweek = 0; indexweek < nbweeks; indexweek++) {
      monthList[indexweek] = [];
      if (nbweeks == indexweek + 1) {
        lastday = lastdayindex + 1;
      }
      if (indexweek > 0) {
        dayone = 0;
      }
      for (let indexday = dayone; indexday < lastday; indexday++) {
        let d1 = new Date(year, month - 1, day).toDateString();
        let istoday = d1 == today;
        let colorsEvents=this.getnbevents(day, month-1)
        monthList[indexweek][indexday] = {
          day: day,
          istoday: istoday,
          colors: colorsEvents.color,
          events: [],
          nb: colorsEvents.nb
        };
        day++;
      }
    }

    return monthList;
  }

  getNbWeeks(month, year) {
    let dayone = new Date(year, month - 1, 1).getDay();
    let nbdaysMonth = new Date(year, month, 0).getDate();
    let lastday = new Date(year, month - 1, nbdaysMonth).getDay();
    return (nbdaysMonth + dayone + (6 - lastday)) / 7;
  }

  getTodayEvents(day, month) {
    this.daydetails={}

    if (this.events.length > 0) {
      this.loader = true;
      this.daydetails = cloneDeep(day);
      let d1 = new Date(this.year, month, day.day).toDateString();

      for (let index = 0; index < this.events.length; index++) {
        const element = this.events[index];
        let d2 = element.start.toDateString();
        if (d2 == d1) {
          this.daydetails.events.push(element);
        }
        if (index == this.events.length - 1) {
          let self = this;
          setTimeout(() => {
            self.loader = false;
          }, 1000);
        }

      }
    }
  }
  getnbevents(day, month) {
    let nb = 0;
    let colors=[]
    if (this.events.length > 0) {
      let d1 = new Date(this.year, month, day).toDateString();
      for (let index = 0; index < this.events.length; index++) {
        const element = this.events[index];
        let d2 = element.start.toDateString();
        if (d2 == d1) {
          nb++;
          colors.push(element.color.secondary)
        }
      }
      return ({nb:nb,color:colors.toString()})
    } else {
      return {color:"",nb:0}
    }
  }
  eventClickedFn(event) {
    this.eventClicked.emit(event);
  }
  refresh(date) {
    this.initCalendar(date);
  }



}
