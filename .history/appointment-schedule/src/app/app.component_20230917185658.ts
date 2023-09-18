import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appointmentsList: any[] = []

  addAppointment(appointment: any) {
    this.appointmentsList.push(appointment)
  }

}

