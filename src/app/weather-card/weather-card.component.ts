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
    
  }

  currentWeatherData?: WeatherData;
  forecastWeatherData?: WeatherData;

  cityName: string = '';

  loadCurrentWeatherData() {
    this.WeatherService.getCurrentWeatherData(this.cityName)
    .subscribe({
      next: (response) => {
        this.currentWeatherData = response;
        console.log(this.currentWeatherData)
      }
    })
  }
}
