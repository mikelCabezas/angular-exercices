import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appointmentsList: any[] = []

  ngOnInit(): void {
    console.log(this.appointmentsList)
  }

  addAppointment(appointment: any) {
    this.appointmentsList.push(appointment)
  }

}

