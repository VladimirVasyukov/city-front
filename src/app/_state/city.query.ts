import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { QueryEntity } from '@datorama/akita';

import { CitiesState, CitiesStore } from './city.store';
import { City } from './city.model';

@Injectable({
  providedIn: 'root',
})
export class CitiesQuery extends QueryEntity<CitiesState> {
  selectAllCities$: Observable<City[]> = this.selectAll();

  constructor(protected override store: CitiesStore) {
    super(store);
  }
}
