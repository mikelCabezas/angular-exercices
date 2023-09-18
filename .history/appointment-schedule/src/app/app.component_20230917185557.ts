import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appointmentsList: any[] = []

  addAppointment(appointment: any) {
    console.log('main compo father')
    console.log("🚀 ~ file: app.component.ts:13 ~ AppComponent ~ addAppointment ~ appointment:", appointment)
    this.appointmentsList.push(appointment)
    console.log("🚀 ~ file: app.component.ts:15 ~ AppComponent ~ addAppointment ~ appointmentsList:", this.appointmentsList)
  }

}

