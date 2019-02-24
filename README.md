# angular 6.0+ calendar year view

## Demo

https://github.com/MariemChaabeni/angular-calendar-year-view

## How it looks
![Image description](https://i.imgur.com/t6YeX9n.png)


## Getting started
First install through npm:

```bash
npm i angular-calendar-year-view --save
```

## Usage
Finally import the calendar module into your apps module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularCalendarYearViewModule } from 'angular-calendar-year-view';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AngularCalendarYearViewModule
  ]
})
export class MyModule {}
```
Use the view in your html:
```html
<angular-calendar-year-view  
        [themecolor]="'#4ab3cc'" 
        [events]="events"  
        [viewDate]="viewDate"  
        (eventClicked)="eventClicked($event)" >
</angular-calendar-year-view>
```
In your typescript:

```typescript
const colors: any = {
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
  events:any=[
    {
      start: new Date(),
      title: 'title event 1',
      color: this.colors.red,
      id:1
    }
  ]
  viewDate:Date = new Date();
  themecolor:any='#4ab3cc'
```
## License

MIT
