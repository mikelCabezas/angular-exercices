import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  city = ''
  weatherCity = ''
  weatherCountry = ''
  currentTemperature = 0
  currentHumidity = 0
  currentWeather = ''

  temperatureAfter3h = 0
  humidityAfter3h = 0
  weatherAfter3h = ''

  date1h = ''
  day1h = ''
  time1h = ''
  temp1h = ''

  date2h = ''
  day2h = ''
  time2h = ''
  temp2h = ''

  date3h = ''
  day3h = ''
  time3h = ''
  temp3h = ''

  date4h = ''
  day4h = ''
  time4h = ''
  temp4h = ''

  date5h = ''
  day5h = ''
  time5h = ''
  temp5h = ''


  query = false
  loader = false

  constructor(private _weatherService: WeatherService) {

  }

  ngOnInit() { }

  getWeather() {
    this.query = false
    this.loader = true
    this._weatherService.getWeather(this.city).subscribe(data => {

      this.weatherCity = data.city.name
      this.weatherCountry = data.city.country
      this.currentTemperature = data.list[0].main.temp.toFixed(1)

      const date1h = new Date(data.list[0].dt * 1000);
      this.day1h = date1h.toLocaleDateString('en-US', { weekday: 'long' })
      this.time1h = `${date1h.getHours()}:00`
      this.temp1h = data.list[0].main.temp

      const date2h = new Date(data.list[1].dt * 1000);
      this.day2h = date2h.toLocaleDateString('en-US', { weekday: 'long' })
      this.time2h = `${date2h.getHours()}:00`
      this.temp2h = data.list[1].main.temp

      const date3h = new Date(data.list[2].dt * 1000);
      this.day3h = date3h.toLocaleDateString('en-US', { weekday: 'long' })
      this.time3h = `${date3h.getHours()}:00`
      this.temp3h = data.list[2].main.temp

      const date4h = new Date(data.list[3].dt * 1000);
      this.day4h = date4h.toLocaleDateString('en-US', { weekday: 'long' })
      this.time4h = `${date4h.getHours()}:00`
      this.temp4h = data.list[3].main.temp

      const date5h = new Date(data.list[4].dt * 1000);
      this.day5h = date5h.toLocaleDateString('en-US', { weekday: 'long' })
      this.time5h = `${date5h.getHours()}:00`
      this.temp5h = data.list[4].main.temp

      this.loader = false
      console.log(data)
      console.log(date1h.toLocaleDateString('en-US', { weekday: 'long' }))
      console.log(this.time1h, this.time2h, this.time3h, this.time4h, this.time5h)
    })
  }
}
