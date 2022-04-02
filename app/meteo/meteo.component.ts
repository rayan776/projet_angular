import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { MeteoData } from '../interfaces/meteo.interface';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [

      state('void', style({opacity:0})),
      

      transition('void <=> *', [
        animate(250)
      ])
    ])
  ]
})

export class MeteoComponent {

  @Input() public meteo!: MeteoData;
  public BASE_URL = 'https://openweathermap.org/img/wn';

  showInfos = [
    {name:'Pression',
     show:true,
     desc:'Pression atmosphérique',
     unit:'hPa',
     variable:'meteo.main.pressure'
    },
    {
      name:'Vent',
      show:true,
      desc:'Vitesse du vent',
      unit:'km/h',
      variable:'meteo.wind.speed'
    },
    {
      name:'Humidité',
      show:true,
      desc:'Humidité',
      unit:'%',
      variable:'meteo.main.humidity'
    },
    {
      name:'Visibilité',
      show:false,
      desc:'Visibilité',
      unit:'mètres',
      variable:'meteo.visibility'
    }
  ]

  getInfo(variable:string) {

    if (variable === 'meteo.wind.speed') {
      return Math.round(this.meteo.wind.speed*3.6);
    }
    else if (variable === 'meteo.main.pressure') {
      return this.meteo.main.pressure;
    }
    else if (variable === 'meteo.main.humidity') {
      return this.meteo.main.humidity;
    }
    else if (variable === 'meteo.visibility') {
      return this.meteo.visibility;
    }

    return null;
  }

  round(nb:number) {
    return Math.round(nb);
  }

}

