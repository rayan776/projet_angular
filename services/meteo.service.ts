import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coord, MeteoData } from 'src/app/interfaces/meteo.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private readonly API_URL = environment.openWeather.url;

  constructor(private readonly http: HttpClient) { }

  public getMeteoParNom(city: string):Observable<MeteoData>{
    const params = new HttpParams().set('q', city);
    return this.http.get<MeteoData>(`${this.API_URL}/weather`, {params});
  }

  public getMeteoParCoord(coord: Coord):Observable<MeteoData> {
    const params = new HttpParams().set('lat', coord.latitude).set('lon', coord.longitude);
    return this.http.get<MeteoData>(`${this.API_URL}/weather`, {params});
  }
}
