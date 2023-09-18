import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // weatherData = []
  weatherData: any[] = [{
    date: '',
    day: 0,
    dayName: '',
    time: '',
    temp: 0,
    pop: 0,
    weather: '',
    icon: '',
  }];
  city = ''
  weatherCity = ''
  weatherCountry = ''
  currentTemperature = 0
  currentpop = 0
  currentWeather = ''




  date1h = ''
  day1h = 0
  dayName1h = ''
  time1h = ''
  temp1h = ''
  pop1h = ''
  weather1h = ''
  icon1h = ''

  date2h = ''
  day2h = 0
  dayName2h = ''
  time2h = ''
  temp2h = ''
  pop2h = ''
  weather2h = ''
  icon2h = ''

  date3h = ''
  day3h = 0
  dayName3h = ''
  time3h = ''
  temp3h = ''
  pop3h = ''
  weather3h = ''
  icon3h = ''

  date4h = ''
  day4h = 0
  dayName4h = ''
  time4h = ''
  temp4h = ''
  pop4h = ''
  weather4h = ''
  icon4h = ''

  date5h = ''
  day5h = 0
  dayName5h = ''
  time5h = ''
  temp5h = ''
  pop5h = ''
  weather5h = ''
  icon5h = ''


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
      this.weatherData = data
      for (let i: any = 0; i < 5; i++) {
        debugger
        const date = new Date(i.dt * 1000)
        const weather: { day: number, dayName: string, time: string, temp: number, pop: number, weather: string, icon: string } = {
          day: date.getUTCDate(),
          dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
          time: `${date.getHours()}:00`,
          temp: i.main.temp.toFixed(1),
          pop: i.pop,
          weather: i.weather[0].main,
          icon: `https://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`,
        }
        this.weatherData.push(weather)
      }
      console.log(this.weatherData)
    })
    // this.currentTemperature = this.weatherData[0].main.temp.toFixed(1)

    // const date1h = new Date(this.weatherData[0].dt * 1000);
    // this.day1h = date1h.getUTCDate()
    // this.dayName1h = date1h.toLocaleDateString('en-US', { weekday: 'short' })
    // this.time1h = `${date1h.getHours()}:00`
    // this.temp1h = this.weatherData[0].main.temp.toFixed(1)
    // this.pop1h = this.weatherData[0].pop
    // this.weather1h = this.weatherData[0].weather[0].main
    // this.icon1h = `https://openweathermap.org/img/wn/${this.weatherData[0].weather[0].icon}@2x.png`

    // const date2h = new Date(this.weatherData[1].dt * 1000);
    // this.day2h = date2h.getUTCDate()
    // this.dayName2h = date2h.toLocaleDateString('en-US', { weekday: 'short' })
    // this.time2h = `${date2h.getHours()}:00`
    // this.temp2h = this.weatherData[1].main.temp.toFixed(1)
    // this.pop2h = this.weatherData[1].pop
    // this.weather2h = this.weatherData[1].weather[0].main
    // this.icon2h = `https://openweathermap.org/img/wn/${this.weatherData[1].weather[0].icon}@2x.png`

    // const date3h = new Date(this.weatherData[2].dt * 1000);
    // this.day3h = date3h.getUTCDate()
    // this.dayName3h = date3h.toLocaleDateString('en-US', { weekday: 'short' })
    // this.time3h = `${date3h.getHours()}:00`
    // this.temp3h = this.weatherData[2].main.temp.toFixed(1)
    // this.pop3h = this.weatherData[2].pop
    // this.weather3h = this.weatherData[2].weather[0].main
    // this.icon3h = `https://openweathermap.org/img/wn/${this.weatherData[2].weather[0].icon}@2x.png`

    // const date4h = new Date(this.weatherData[3].dt * 1000);
    // this.day4h = date4h.getUTCDate()
    // this.dayName4h = date4h.toLocaleDateString('en-US', { weekday: 'short' })
    // this.time4h = `${date4h.getHours()}:00`
    // this.temp4h = this.weatherData[3].main.temp.toFixed(1)
    // this.pop4h = this.weatherData[3].pop
    // this.weather4h = this.weatherData[3].weather[0].main
    // this.icon4h = `https://openweathermap.org/img/wn/${this.weatherData[3].weather[0].icon}@2x.png`

    // const date5h = new Date(this.weatherData[4].dt * 1000);
    // this.day5h = date5h.getUTCDate()
    // this.dayName5h = date5h.toLocaleDateString('en-US', { weekday: 'short' })
    // this.time5h = `${date5h.getHours()}:00`
    // this.temp5h = this.weatherData[4].main.temp.toFixed(1)
    // this.pop5h = this.weatherData[4].pop
    // this.weather5h = this.weatherData[4].weather[0].main
    // this.icon5h = `https://openweathermap.org/img/wn/${this.weatherData[4].weather[0].icon}@2x.png`

    // this.loader = false

    // this._weatherService.getWeather(this.city).subscribe(data => {
    //   this.weatherCity = data.city.name
    //   this.weatherCountry = data.city.country
    //   this.currentTemperature = data.list[0].main.temp.toFixed(1)

    //   const date1h = new Date(data.list[0].dt * 1000);
    //   this.day1h = date1h.getUTCDate()
    //   this.dayName1h = date1h.toLocaleDateString('en-US', { weekday: 'short' })
    //   this.time1h = `${date1h.getHours()}:00`
    //   this.temp1h = data.list[0].main.temp.toFixed(1)
    //   this.pop1h = data.list[0].pop
    //   this.weather1h = data.list[0].weather[0].main
    //   this.icon1h = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`

    //   const date2h = new Date(data.list[1].dt * 1000);
    //   this.day2h = date2h.getUTCDate()
    //   this.dayName2h = date2h.toLocaleDateString('en-US', { weekday: 'short' })
    //   this.time2h = `${date2h.getHours()}:00`
    //   this.temp2h = data.list[1].main.temp.toFixed(1)
    //   this.pop2h = data.list[1].pop
    //   this.weather2h = data.list[1].weather[0].main
    //   this.icon2h = `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`

    //   const date3h = new Date(data.list[2].dt * 1000);
    //   this.day3h = date3h.getUTCDate()
    //   this.dayName3h = date3h.toLocaleDateString('en-US', { weekday: 'short' })
    //   this.time3h = `${date3h.getHours()}:00`
    //   this.temp3h = data.list[2].main.temp.toFixed(1)
    //   this.pop3h = data.list[2].pop
    //   this.weather3h = data.list[2].weather[0].main
    //   this.icon3h = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`

    //   const date4h = new Date(data.list[3].dt * 1000);
    //   this.day4h = date4h.getUTCDate()
    //   this.dayName4h = date4h.toLocaleDateString('en-US', { weekday: 'short' })
    //   this.time4h = `${date4h.getHours()}:00`
    //   this.temp4h = data.list[3].main.temp.toFixed(1)
    //   this.pop4h = data.list[3].pop
    //   this.weather4h = data.list[3].weather[0].main
    //   this.icon4h = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`

    //   const date5h = new Date(data.list[4].dt * 1000);
    //   this.day5h = date5h.getUTCDate()
    //   this.dayName5h = date5h.toLocaleDateString('en-US', { weekday: 'short' })
    //   this.time5h = `${date5h.getHours()}:00`
    //   this.temp5h = data.list[4].main.temp.toFixed(1)
    //   this.pop5h = data.list[4].pop
    //   this.weather5h = data.list[4].weather[0].main
    //   this.icon5h = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`

    //   this.loader = false
    //   console.log(data)
    // })
  }
}
