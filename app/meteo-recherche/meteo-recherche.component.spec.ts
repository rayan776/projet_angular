import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoRechercheComponent } from './meteo-recherche.component';

describe('MeteoRechercheComponent', () => {
  let component: MeteoRechercheComponent;
  let fixture: ComponentFixture<MeteoRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
