import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  constructor (private WeatherService: WeatherService) {}

  ngOnInit(): void {
    this.loadWeatherData();
  }

  weatherData?: WeatherData;

  loadWeatherData() {
    this.WeatherService.getWeatherData('Tapiola')
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(this.weatherData)
      }
    })
  }
}
