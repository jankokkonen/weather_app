import { Component, Input, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';
import { ActivatedRoute } from '@angular/router';

import { Chart } from 'chart.js/auto'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.css']
})
export class TemperatureChartComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;
  private cityNameSubscription!: Subscription;
  forecastWeatherData?: WeatherData;
  tempData: number[] = [];
  @Input() cityName: string = '';

  constructor (private WeatherService: WeatherService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.cityNameSubscription = this.WeatherService.getCityNameObservable().subscribe(cityName => {
      this.cityName = cityName;
      this.loadForecastWeatherData();
    });
  }

  loadForecastWeatherData() {
    this.tempData = [];
    this.WeatherService.getForecastWeatherData(this.cityName, 1)
    .subscribe({
      next: (response) => {
        this.forecastWeatherData = response;
        //console.log(this.forecastWeatherData)
        this.forecastWeatherData.forecast.forecastday[0].hour.forEach((hour) => {
          this.tempData.push(hour.temp_c);
        });
        this.createChart()
      }
    })
  }

  createChart() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    const data = this.tempData;
    const maxDataValue = Math.max(...data); 
    const minDataValue = Math.min(...data); 

    const suggestedMin = minDataValue - 5;
    const suggestedMax = maxDataValue + 5;
    //console.log(this.tempData)

    if (this.canvas.chart) {
      this.canvas.chart.destroy();
    }

    this.canvas.chart = new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label:'Temperature',
          data: this.tempData,
          backgroundColor: "rgba(0, 173, 181, 0.6)",
          borderColor: "#00ADB5",
          fill: true,
          tension: .4
        }],
          labels: ['0.00', '1.00', '2.00', '3.00', '4.00', '5.00', '6.00', '7.00', '8.00', '9.00', '10.00', '11.00', 
          '12.00', '13.00', '14.00', '15.00', '16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00']
      },
      options: {
        scales: {
          x: {
            display: true
          },
          y: {
            suggestedMin: suggestedMin,
            suggestedMax: suggestedMax,
            ticks: {
              stepSize: 5
            }
          }
        },
        elements: {
          point: {
            radius: 0
          },
        },
        plugins: {
          legend: {
            display: false
          },
        },
      }
    })
  }

}
