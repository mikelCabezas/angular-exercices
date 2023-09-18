import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  age = 30
  weight = 70

  height = 170

  onChangeHeight(event: any) {
    this.height = event.target.value
  }
}
