import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { SafePipe } from './safe.pipe';
import { MeteoRechercheComponent } from './meteo-recherche/meteo-recherche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeteoInterceptor } from './interceptor/meteo.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    SafePipe,
    MeteoRechercheComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MeteoInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
