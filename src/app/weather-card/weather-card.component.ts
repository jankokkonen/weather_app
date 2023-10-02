import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  weatherData: any[] = [];

  constructor (private WeatherService: WeatherService) {}

  ngOnInit(): void {
    this.loadWeatherData();
  }

  loadWeatherData() {
    this.WeatherService.getWeatherData().subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData)
    })
  }
}
