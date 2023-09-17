import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/forecast?'

  weatherApiKey = '09e76f098a33472816440015ec15a8a2'
  constructor(private http: HttpClient) {
  }
  getWeather(city: string): Observable<any> {
    const URL = `${this.url}q=${city}&appid=${this.weatherApiKey}`
    return this.http.get(URL)
  }
}
