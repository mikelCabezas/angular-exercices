import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-employees',
  templateUrl: './count-employees.component.html',
  styleUrls: ['./count-employees.component.css']
})
export class CountEmployeesComponent implements OnInit {
  @Input() all: number
  activeRadio = 'All'

  ngOnInit(): void {
    this.all = this.all
    console.log(this.all)
  }
}

