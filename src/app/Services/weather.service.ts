import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    private readonly url = 'http://api.weatherapi.com/v1';
    private readonly apiKey = 'c7539f62442342ba9b4115553232809';
 

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    const headers = new HttpHeaders ({
      'API-Key': this.apiKey,
      'Host': 'http://api.weatherapi.com/v1'
    });

    return this.http.get(this.url, { headers }).pipe(
      catchError((error: any) => {
        console.error('Virhe:', error);
        throw new Error('Jotain meni pieleen. Yritä uudelleen myöhemmin.');
      })
    );
  }
}
