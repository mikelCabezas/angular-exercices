import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // weatherData = []
  weatherData: any[] = [];
  city = ''
  weatherCity = ''
  weatherCountry = ''
  currentTemperature = 0
  currentWeather = ''
  currentIcon = ''
  errorMessage = ''

  query = false
  loader = false

  constructor(private _weatherService: WeatherService) { }
  ngOnInit() { }

  getWeather() {
    this.query = false
    this.loader = true
    this._weatherService.getWeather(this.city).subscribe(data => {
      console.log(data)
      this.weatherData = []
      this.weatherCity = data.city.name
      this.weatherCountry = data.city.country
      this.currentTemperature = data.list[0].main.temp.toFixed(1)
      this.currentIcon = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`

      for (let i: any = 0; i < 5; i++) {
        const date = new Date(data.list[i].dt * 1000)
        const weather: { day: number, dayName: string, time: string, temp: number, pop: number, weather: string, icon: string } = {
          day: date.getUTCDate(),
          dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
          time: `${date.getHours()}:00`,
          temp: data.list[i].main.temp.toFixed(1),
          pop: data.list[i].pop.toFixed(1),
          weather: data.list[i].weather[0].main,
          icon: `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`,
        }
        this.weatherData.push(weather)
      }
      this.query = true
      this.loader = false
    }, error => {
      this.loader = false
      if (error.statusText === 'Not Found') {
        this.errorMessage = 'Error, city name not found.'
      } else {
        this.errorMessage = 'Error, please try again.'
      }
    })
  }
}
