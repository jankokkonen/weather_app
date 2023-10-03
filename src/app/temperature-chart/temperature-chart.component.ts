import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto'; 

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.css']
})
export class TemperatureChartComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  constructor () {}
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    const data = [8,7,9,12,14,10,6,7,8,7,5,4];
    const maxDataValue = Math.max(...data); // Etsi taulukon maksimiarvo
    const minDataValue = Math.min(...data); // Etsi taulukon minimiarvo

    const suggestedMin = minDataValue - 5;
    const suggestedMax = maxDataValue + 5;
  
    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label:'Temperature',
          data: data,
          backgroundColor: "rgb(115 185 243 / 0.4)",
          borderColor: "#007ee7",
          fill: true,
          tension: 0.4
        }],
          labels: ['2.00', '4.00', '6.00', '8.00', '10.00', '12.00', '14.00', '16.00', '18.00', '20.00', '22.00', '0.00']
      },
      options: {
        scales: {
          x: {
            display: true, // Piilota x-akselin taustaruudukko
          },
          y: {
            suggestedMin: suggestedMin,
            suggestedMax: suggestedMax,
            ticks: {
              stepSize: 5, // Aseta askelkoko esim. 5
            }
          }
        },
        elements: {
          point: {
            radius: 0, // Poista pisteet viivan päältä
          },
        },
      }
    })
  }

}
