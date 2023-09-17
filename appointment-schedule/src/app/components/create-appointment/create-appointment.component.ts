import { Component } from '@angular/core';
import { Datepicker, Input, initTE } from "tw-elements";


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {
  ngOnInit() {
    initTE({ Datepicker, Input }, { allowReinits: true });

  }
}
