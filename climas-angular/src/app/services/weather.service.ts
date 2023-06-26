import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string;
  URL: string;

  constructor(private http: HttpClient) { 
    this.apiKey = '6f06e3f730dda087ba4bc33574ddd934';
    this.URL = 'https://api.openweathermap.org/data/2.5/weather?appid=' + this.apiKey + '&units=metric&q=';
  }

  getWeather(cityName: string, countryCode: string){
    return this.http.get(this.URL + cityName + ',' + countryCode); 
  }
  public getCities() :Observable<any>{
    return this.http.get<any>(
      'assets/mocks/cities-mock.json'
      );
  }

}
