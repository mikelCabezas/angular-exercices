import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  bmi: number
  result: string
  interpretation: string

  constructor(private route: ActivatedRoute) {
    this.result = ''
    this.interpretation = ''
    this.bmi = +route.snapshot.paramMap.get('value')!
  }

  ngOnInit(): void {
    this.getResult()
  }

  getResult() {
    if (this.bmi >= 40) {
      this.result = 'Morbidly Obese'
      this.interpretation = 'Health risk extremely high'
    }
    if (this.bmi >= 35) {
      this.result = 'Severely Obese'
      this.interpretation = 'Health risk very high'
    }
    if (this.bmi >= 30) {
      this.result = 'Obese'
      this.interpretation = 'Health risk high'
    }
    if (this.bmi >= 25) {
      this.result = 'Overweight'
      this.interpretation = 'Health risk increased'
    }
    if (this.bmi <= 24.9) {
      this.result = 'Normal'
      this.interpretation = 'Health risk minimal'
    }
    if (this.bmi <= 18.5) {
      this.result = 'Underweight'
      this.interpretation = 'Health risk minimal'
    }
  }
}
