import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularCalendarYearViewComponent } from './angular-calendar-year-view/angular-calendar-year-view.component';
import { PopoverModule } from "ngx-bootstrap";
import { MomentModule } from "angular2-moment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    AngularCalendarYearViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MomentModule,
    PopoverModule.forRoot()
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
