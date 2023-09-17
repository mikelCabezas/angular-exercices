import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  city = ''
  currentTemperature = 0
  currentHumidity = 0
  currentWeather = ''

  temperatureAfter3h = 0
  humidityAfter3h = 0
  weatherAfter3h = ''

  time1h = ''
  time2h = ''
  time3h = ''
  time4h = ''
  time5h = ''

  query = false
  loader = false

  constructor(private _weatherService: WeatherService) {

  }

  ngOnInit() { }

  getWeather() {
    this.query = false
    this.loader = true
    this._weatherService.getWeather(this.city).subscribe(data => {
      const date1h = new Date(data.list[0].dt * 1000);
      const date2h = new Date(data.list[1].dt * 1000);
      const date3h = new Date(data.list[2].dt * 1000);
      const date4h = new Date(data.list[3].dt * 1000);
      const date5h = new Date(data.list[4].dt * 1000);
      this.loader = false
      this.time1h = `${date1h.getHours()}:00`
      this.time2h = `${date2h.getHours()}:00`
      this.time3h = `${date3h.getHours()}:00`
      this.time4h = `${date4h.getHours()}:00`
      this.time5h = `${date5h.getHours()}:00`

      console.log(this.time1h, this.time2h, this.time3h, this.time4h, this.time5h)
    })
  }
}
