import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentLisComponent } from './components/appointment-lis/appointment-lis.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentLisComponent,
    AppointmentListComponent,
    CreateAppointmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
