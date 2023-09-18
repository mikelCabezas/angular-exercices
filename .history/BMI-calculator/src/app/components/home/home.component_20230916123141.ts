import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  calculateBMI() {
    const BMI = this.weight / Math.pow(this.height / 100, 2)
    // this.router.navigate(['/result', BMI.toFixed(2)])
  }

}
