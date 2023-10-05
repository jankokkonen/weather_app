import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';
import { FormsModule } from '@angular/forms';
import { RainChartComponent } from './rain-chart/rain-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    TemperatureChartComponent,
    RainChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
