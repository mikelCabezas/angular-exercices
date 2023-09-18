import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  @Input() appointmentsList: any
  @Output() handleDeleteAppointment = new EventEmitter

  deleteAppointment(index: number) {

  }
}
