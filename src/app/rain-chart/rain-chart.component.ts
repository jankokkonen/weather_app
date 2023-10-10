import { Component, OnInit, ViewChild, SimpleChanges, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';
import { ActivatedRoute } from '@angular/router';

import { Chart } from 'chart.js/auto'; 

@Component({
  selector: 'app-rain-chart',
  templateUrl: './rain-chart.component.html',
  styleUrls: ['./rain-chart.component.css']
})
export class RainChartComponent implements OnInit{
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  forecastWeatherData?: WeatherData;
  tempData: number[] = [];
@Input() cityName: string = '';

  constructor (private WeatherService: WeatherService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cityName = params['cityName'];
      });
    if (this.cityName) {
      this.loadForecastWeatherData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('cityName changes:', this.cityName);
    if (changes['cityName'] && !changes['cityName'].firstChange) {
      this.loadForecastWeatherData();
    }
  }

  loadForecastWeatherData() {
    this.tempData = [];
    this.WeatherService.getForecastWeatherData(this.cityName, 1)
    .subscribe({
      next: (response) => {
        this.forecastWeatherData = response;
        console.log(this.forecastWeatherData)
        this.forecastWeatherData.forecast.forecastday[0].hour.forEach((hour) => {
          this.tempData.push(hour.precip_mm);
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

    const suggestedMax = maxDataValue + .1;
    //console.log(this.tempData)

    if (this.canvas.chart) {
      this.canvas.chart.destroy();
    }

    this.canvas.chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [{
          label:'Rain mm/h',
          data: this.tempData,
          backgroundColor: "rgba(0, 173, 181, 0.7)"
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
            beginAtZero: true,
            suggestedMax: suggestedMax,
            ticks: {
              stepSize: 0.1
            }
          }
        },
        elements: {
          point: {
            radius: 0
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
      }
    })
  }

}


