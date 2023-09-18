import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  age = 30
  weight = 70
  height = 170
  sex = ''

  constructor() { }

  ngOnInit(): void { }

  onChangeHeight(event: any) {
    this.height = event.target.value
  }

  male() {
    this.sex = 'male'
  }

  female() {
    this.sex = 'female'
  }

}
