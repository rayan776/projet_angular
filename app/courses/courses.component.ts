import { Component, Input} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {

  @Input() title: string | undefined;
  
  isConnected = true;
  courses: any;

  constructor() {
    

    setTimeout(
      () => {
        this.isConnected = false;
      }, 4000
    );
  }

  onDisplayMessage() {
    alert('Bouton cliqué.');
  }

  getColor() {
    return (this.isConnected) ? "green" : "red";
  }

}
