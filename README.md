# angular 6.0+ calendar year view

## Demo
GitHub: https://github.com/MariemChaabeni/angular-calendar-year-view
Live Demo: https://angular-ft5znm.stackblitz.io/

## How it looks
![Image description](https://i.imgur.com/t6YeX9n.png)


## Getting started
First install through npm:

```bash
npm i angular-calendar-year-view --save
```

You need to import in your index.html

```html
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
```

## Usage
Finally import the calendar module into your apps module:

```typescript
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularCalendarYearViewModule } from 'angular-calendar-year-view';

@NgModule({
  imports: [
    BrowserModule,
    AngularCalendarYearViewModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class MyModule {}
```
Use the view in your html:
```html
<angular-calendar-year-view  
       [themecolor]="themecolor" 
       [events]="events"  
       [viewDate]="viewDate"  
       (eventClicked)="eventClicked($event)" 
       (actionClicked)="actionClicked($event)" >
</angular-calendar-year-view>
```
In your typescript:

```typescript
const colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
  events: any = [
    {
      start: new Date(),
      end: new Date(),
      title: 'title event 1',
      color: this.colors.red,
      actions: this.actions
    },
    {
      start: new Date(),
      end: new Date(),
      title: 'title event 2',
      color: this.colors.yellow,
      actions: this.actions
    }
  ]
  viewDate: Date = new Date();
  themecolor: any = '#0a5ab3'
```
## License

MIT
