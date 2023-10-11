import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { WeatherData } from '../models/weather.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private cityNameSubject = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getCurrentWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.currentWeatherApiBaseUrl, {

      headers: new HttpHeaders()
      .set (
        environment.XRapidAPIHostHeaderName, 
        environment.XRapidAPIHostHeaderValue
      )
      .set (
        environment.XRapidAPIKeyHeaderName, 
        environment.XRapidAPIKeyHeaderValue
      ),

      params: new HttpParams()
      .set (
        'q', cityName
      )

    })
  }

  getForecastWeatherData(cityName: string, days: number): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.forecastWeatherApiBaseUrl, {

      headers: new HttpHeaders()
      .set (
        environment.XRapidAPIHostHeaderName, 
        environment.XRapidAPIHostHeaderValue
      )
      .set (
        environment.XRapidAPIKeyHeaderName, 
        environment.XRapidAPIKeyHeaderValue
      ),

      params: new HttpParams()
      .set (
        'q', cityName
      )
      .set (
        'days', days
      )

    })
  }

  updateCityName(cityName: string) {
    this.cityNameSubject.next(cityName);
    console.log('Service: ' + cityName)
  }

  getCityNameObservable(): Observable<string> {
    return this.cityNameSubject.asObservable();
  }
}
