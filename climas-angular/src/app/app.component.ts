import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ciudades: any;
  selectedCityValue: string;
  cityIsSelected: boolean;

  selectedCityWeather: any;
  description: string;
  principalWeather: string;
  cloudsQuantity: number;
  communeName: string;
  countryCode: string;
  windSpeed: any;
  humidity: any;
  actualT: any;
  minT: any;
  maxT: any;

  constructor(
    private services: WeatherService,
    private http: HttpClient
  ){
    this.cityIsSelected = false;
    this.selectedCityValue = '';
    this.description = '';
    this.principalWeather = '';
    this.cloudsQuantity = 0;
    this.communeName = '';
    this.countryCode = '';
    this.windSpeed = null;
    this.humidity = null;
    this.actualT = null;
    this.minT = null;
    this.maxT = null;
  }

  ngOnInit(): void {
    this.services.getCities().subscribe(resp => {
      this.ciudades = resp.data;
      console.log(this.ciudades)
    })
  }

  onCitySelected(){
    let selectedCity = this.selectedCityValue.toLowerCase();
    this.services.getWeather(selectedCity, 'cl').subscribe(response => {
      this.selectedCityWeather = response;
      this.description = this.selectedCityWeather.weather[0].description;
      this.principalWeather = this.selectedCityWeather.weather[0].main;
      this.cloudsQuantity = this.selectedCityWeather.clouds.all;
      this.communeName = this.selectedCityWeather.name;
      this.countryCode = this.selectedCityWeather.sys.country;
      this.windSpeed = this.selectedCityWeather.wind.speed;
      this.humidity = this.selectedCityWeather.main.humidity;
      this.actualT = this.selectedCityWeather.main.temp;
      this.minT = this.selectedCityWeather.main.temp_min;
      this.maxT = this.selectedCityWeather.main.temp_max;
      this.cityIsSelected = true;
      console.log('DATA', this.selectedCityWeather)
    },
    err => console.log('error', err));
    console.log('selected', this.selectedCityValue);
  }
}