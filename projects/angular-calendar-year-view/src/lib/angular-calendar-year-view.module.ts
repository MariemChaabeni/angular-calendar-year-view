import { NgModule, ModuleWithProviders } from '@angular/core';
import { AngularCalendarYearViewComponent } from './angular-calendar-year-view.component';
import { PopoverModule } from 'ngx-bootstrap/popover'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AngularCalendarYearViewComponent
  ],
  imports: [
    CommonModule,
    PopoverModule
  ],
  exports: [
    AngularCalendarYearViewComponent
  ]
})
export class AngularCalendarYearViewModule { 
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularCalendarYearViewModule,
      providers: [
        PopoverModule.forRoot().providers
      ]
    }
  }
}
