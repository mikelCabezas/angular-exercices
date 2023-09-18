import { Component } from '@angular/core';
import { Datepicker, Input, Timepicker, initTE } from "tw-elements";


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {
  ngOnInit() {
    initTE({ Datepicker, Input, Timepicker }, { allowReinits: true });
    const datepickerDisablePast = document.getElementById('datepicker-disable-past');
    new Datepicker(datepickerDisablePast, {
      disablePast: true
    });

    const pickerInline2 = document.querySelector("#timepicker-inline-24");
    const timepickerMaxMin2 = new Timepicker(pickerInline2, {
      format24:
        true, inline: true,
    });
  }
}
