import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appointmentsList: any[] = []

  ngOnInit(): void {
  }

  addAppointment(appointment: any) {
    this.appointmentsList.push(appointment)
  }
  deleteAppointment(index: number) {
    this.appointmentsList.splice(index, 1)
  }
}

