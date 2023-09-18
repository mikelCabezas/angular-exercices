import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-employees',
  templateUrl: './count-employees.component.html',
  styleUrls: ['./count-employees.component.css']
})
export class CountEmployeesComponent implements OnInit {
  @Input() all: number
  @Input() frontendDevelopers: number
  @Input() backendDevelopers: number
  @Input() fullstackDevelopers: number

  constructor() {
    this.all = 0
    this.frontendDevelopers = 0
    this.backendDevelopers = 0
    this.fullstackDevelopers = 0
  }
  activeRadio = 'All'

  ngOnInit(): void {
  }
}

