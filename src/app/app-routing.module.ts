import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';
import { RainChartComponent } from './rain-chart/rain-chart.component';

const routes: Routes = [
  { path: 'temperature/:cityName', component: TemperatureChartComponent},
  { path: 'rain/:cityName', component: RainChartComponent },
  { path: '', redirectTo: '/temperature', pathMatch: 'full' },
  { path: '**', redirectTo: '/temperature' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
