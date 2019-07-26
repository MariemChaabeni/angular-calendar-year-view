import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { AngularCalendarYearViewModule } from 'projects/angular-calendar-year-view/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularCalendarYearViewModule.forRoot()
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
