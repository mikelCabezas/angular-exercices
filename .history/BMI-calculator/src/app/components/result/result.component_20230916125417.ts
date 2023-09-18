import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  bmi: number

  constructor(private route: ActivatedRoute) {
    this.bmi = +route.snapshot.paramMap.get('value')!
  }

  ngOnInit(): void {

  }
}
