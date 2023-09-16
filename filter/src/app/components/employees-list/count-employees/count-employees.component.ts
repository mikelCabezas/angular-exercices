import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Output() countSelectedFilter = new EventEmitter<string>()

  constructor() {
    this.all = 0
    this.frontendDevelopers = 0
    this.backendDevelopers = 0
    this.fullstackDevelopers = 0
  }

  ngOnInit(): void {
  }

  activeRadio = 'All'

  selectedFilter(): void {
    this.countSelectedFilter.emit(this.activeRadio)
  }
}

