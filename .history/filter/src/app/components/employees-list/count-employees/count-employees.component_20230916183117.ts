import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-employees',
  templateUrl: './count-employees.component.html',
  styleUrls: ['./count-employees.component.css']
})
export class CountEmployeesComponent {
  @Input() all: number
  activeRadio = 'All'

}

