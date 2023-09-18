import { Component } from '@angular/core';
import { Datepicker, Input, Timepicker, initTE } from "tw-elements";


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {

  name = ''
  date = ''
  time = ''
  symptoms = ''

  incorrectForm = false

  addAppointment() {
    if (!this.name || !this.date || !this.time || !this.symptoms) {
      this.incorrectForm = false
      alert('all fields are required')
    }
    const appointment = {
      name: this.name,
      date: this.date,
      time: this.time,
      symptoms: this.symptoms
    }
    console.log(appointment)
  }

  constructor() { }

  ngOnInit() {
    initTE({ Datepicker, Input, Timepicker }, { allowReinits: true });
    const datepickerDisablePast = document.getElementById('datepicker-disable-past');
    new Datepicker(datepickerDisablePast, {
      disablePast: true
    });

    const pickerDisablePast = document.querySelector("#timepicker-disable-past");
    const timepickerDisablePast = new Timepicker(pickerDisablePast, {
      disablePast: true,
      format24: true,
    });
  }
}
