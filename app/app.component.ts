import { GeoLocationService } from '../services/geo-location.service';
import { MeteoService } from './../services/meteo.service';

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MeteoData } from './interfaces/meteo.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public meteo$!: Observable<MeteoData>;

  constructor(
    private http: HttpClient, 
    private readonly meteoSvc: MeteoService, 
    private readonly geolocationSvc: GeoLocationService) 
    {
    
  }

  public onSearch(city: string): void {
    this.meteo$ = this.meteoSvc.getMeteoParNom(city);
  }

  public onSubmit(data:any) {
    this.onSearch(data.city);
  }

  public async getLocation():Promise<void> {
    try {
      const {coords} = await this.geolocationSvc.getPosition();
      this.meteo$ = this.meteoSvc.getMeteoParCoord(coords);

    }
    catch (error) {
      console.log(error);
    }
  }

  
 
}

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}