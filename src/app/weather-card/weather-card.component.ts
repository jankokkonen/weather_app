import { Component, ElementRef, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @ViewChild('cityInput')cityNameElement!: ElementRef<HTMLInputElement>;
  cityName: string = '';
  currentWeatherData?: WeatherData;

  constructor (private WeatherService: WeatherService) {}

  ngOnInit(): void {
    this.loadCurrentWeatherData();
  }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLInputElement): void {
    if (target === this.cityNameElement.nativeElement) {
      target.select();
    }
  }
  loadCurrentWeatherData() {
    if (this.cityNameElement) {
      this.cityName = this.cityNameElement.nativeElement.value
      this.WeatherService.getCurrentWeatherData(this.cityName)
      .subscribe({
        next: (response) => {
          this.currentWeatherData = response;
          //console.log(this.currentWeatherData)
        }
      })
    } else {
      this.cityName = 'Helsinki';
      this.WeatherService.getCurrentWeatherData(this.cityName)
      .subscribe({
        next: (response) => {
          this.currentWeatherData = response;
          //console.log(this.currentWeatherData)
        }
      })
    }
  }
}
