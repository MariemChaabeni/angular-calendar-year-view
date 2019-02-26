import { BrowserModule, } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { AngularCalendarYearViewComponent } from './angular-calendar-year-view/angular-calendar-year-view.component';
import { AppComponent } from './app.component';
import {PopoverModule} from 'ngx-bootstrap/popover'
@NgModule({
  declarations: [
    AppComponent,
    AngularCalendarYearViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PopoverModule.forRoot()
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
