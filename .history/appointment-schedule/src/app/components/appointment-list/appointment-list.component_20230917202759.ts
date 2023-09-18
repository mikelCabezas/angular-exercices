import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  @Input() appointmentsList: any
  @Output() handleDeleteAppointment: any

  deleteAppointment(index: number) {

  }
}
