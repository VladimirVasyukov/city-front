import { Injectable } from '@angular/core';

import { EntityState, StoreConfig, EntityStore } from '@datorama/akita';

import { City } from './city.model';

export interface CitiesState extends EntityState<City, string> {}

export function createInitialState(): CitiesState {
  return {};
}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'session' })
export class CitiesStore extends EntityStore<CitiesState> {
  constructor() {
    super(createInitialState());
  }
}
