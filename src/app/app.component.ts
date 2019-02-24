import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-year-calendar';
  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
  events:any=[]
  viewDate:Date = new Date();
  prev(){

  }
  next(){
    this.events=[{
      start: new Date(2019,1,1),
      end:new Date(2019,2,1),
      title: 'A 3 day event',
      color: this.colors.red,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: new Date(2019,1,2),
      title: 'An event with no end date',
      color: this.colors.yellow,
    },
    {
      start: new Date(2019,1,2),
      title: 'A long event that spans 2 months',
      color: this.colors.blue,
      allDay: true
    },
    {
      start: new Date(),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: this.colors.yellow,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }]
  }
  eventClicked(event){
    console.log(event);
    
  }
}
