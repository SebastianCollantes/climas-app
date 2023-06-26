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

  constructor(
    private services: WeatherService,
    private http: HttpClient
  ){}

  ngOnInit(): void {
      this.services.getWeather('santiago','cl').subscribe(resp => {
        console.log('DATA', resp)
      },
      err => console.log('error', err));

      this.services.getCities().subscribe(resp => {
        this.ciudades = resp.data;
      })
  }
}
