import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { CitiesService } from '../../../../_state/city.service';
import { CitiesQuery } from '../../../../_state/city.query';
import { City } from '../../../../_state/city.model';

@Component({
  selector: 'app-cities-list',
  template: `
    <app-list
      *ngFor="let city of cities$ | async"
      [city]="city"
      (onChange)="addCityToFavorites($event)"
      (deleteCity)="deleteCity($event)"
    >
    </app-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesListComponent implements OnInit {
  readonly cities$: Observable<City[]> = this.query.selectAllCities$;

  constructor(private service: CitiesService, private query: CitiesQuery) {}

  ngOnInit() {
    this.service.initCities().subscribe();
  }

  addCityToFavorites(city: City) {
    this.service.addCityToFavorites(city).subscribe();
  }

  deleteCity(id: string) {
    this.service.deleteCity(id).subscribe();
  }
}
