import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-employees',
  templateUrl: './count-employees.component.html',
  styleUrls: ['./count-employees.component.css']
})
export class CountEmployeesComponent implements OnInit {
  @Input() all: number

  constructor() {
    this.all = 0
  }
  activeRadio = 'All'

  ngOnInit(): void {

    console.log(this.all)
  }
}

