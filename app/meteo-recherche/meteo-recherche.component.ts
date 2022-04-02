import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-meteo-recherche',
  templateUrl: './meteo-recherche.component.html',
  styleUrls: ['./meteo-recherche.component.css']
})
export class MeteoRechercheComponent implements OnInit {

  inputSearch = new FormControl('');
  @Output() submitted = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.onChange();
  }

  private onChange(): void {
    this.inputSearch.valueChanges.pipe(
      map( (search:string) => search.trim()),
      debounceTime(800),
      distinctUntilChanged(),
      filter( (search:string) => search !== '' ),
      tap( (search:string) => this.submitted.emit(search))
    ).subscribe();
  }

}
