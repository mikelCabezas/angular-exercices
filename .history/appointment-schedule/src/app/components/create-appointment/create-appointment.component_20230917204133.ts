import { Component, EventEmitter, Output } from '@angular/core';
import { Datepicker, Input, Timepicker, initTE } from "tw-elements";


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {
  @Output() newAppointment = new EventEmitter<any>()

  name = ''
  lastName = ''
  date = ''
  time = ''
  sympthoms = ''

  incorrectForm = false

  addAppointment() {
    console.log(this.name, this.date, this.time, this.sympthoms)
    if (!this.name || !this.lastName || !this.date || !this.time || !this.sympthoms) {
      return this.incorrectForm = true

    }
    const appointment = {
      name: this.name,
      lastName: this.lastName,
      date: this.date,
      time: this.time,
      sympthoms: this.sympthoms
    }
    this.newAppointment.emit(appointment)
    this.resetForm()
    this.incorrectForm = false
  }

  resetForm() {
    this.name = ''
    this.lastName = ''
    this.date = ''
    this.time = ''
    this.sympthoms = ''
  }

  constructor() { }

  ngOnInit() {
    initTE({ Datepicker, Input, Timepicker }, { allowReinits: true });
    const datepickerDisablePast = document.getElementById('datepicker-disable-past');
    new Datepicker(datepickerDisablePast, {
      disablePast: true
    });

    const pickerInc = document.querySelector("#timepicker-inc");
    const timepickerInc = new Timepicker(pickerInc, { increment: true, });

  }
}
