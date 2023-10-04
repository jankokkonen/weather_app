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
    this.loadCurrentWeatherData();
    this.loadForecastWeatherData();
  }

  currentWeatherData?: WeatherData;

  loadCurrentWeatherData() {
    this.WeatherService.getCurrentWeatherData('Tapiola')
    .subscribe({
      next: (response) => {
        this.currentWeatherData = response;
        console.log(this.currentWeatherData)
      }
    })
  }

  loadForecastWeatherData() {
    this.WeatherService.getForecastWeatherData('Tapiola', 1)
    .subscribe({
      next: (response) => {
        this.currentWeatherData = response;
        console.log(this.currentWeatherData)
      }
    })
  }
}
