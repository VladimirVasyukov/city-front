import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, Observable, tap, throwError } from 'rxjs';

import { guid } from '@datorama/akita';

import { CitiesStore } from './city.store';
import { City, CityForm } from './city.model';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private citiesStore: CitiesStore, private http: HttpClient) {}

  initCities(): Observable<City[]> {
    return this.http.get<City[]>('http://localhost:3333/api/cities').pipe(
      tap((cities) => {
        this.citiesStore.add(cities);
      }),
      catchError((err) => {
        console.log('Error: ', err.message);
        return throwError(() => new Error(err.message));
      })
    ) as Observable<City[]>;
  }

  addCity(cityForm: CityForm, id?: string): Observable<City> {
    if (!id) {
      const city = this.createNewCity(cityForm);
      return this.http.post<City>(
        'http://localhost:3333/api/cities',
        city
      ) as Observable<City>;
    } else {
      return this.patchCity(cityForm, id) as Observable<City>;
    }
  }

  addCityToFavorites({ id, favorite }: City): Observable<City> {
    return this.http
      .patch<City>(`http://localhost:3333/api/cities/${id}`, { id, favorite })
      .pipe(
        tap(() => {
          this.citiesStore.update(id, { favorite });
        })
      ) as Observable<City>;
  }

  getCityById(id: string) {
    return this.http.get<City>(`http://localhost:3333/api/cities/${id}`);
  }

  deleteCity(id: string): Observable<void> {
    return this.http
      .delete<void>(`http://localhost:3333/api/cities/${id}`)
      .pipe(
        tap(() => {
          this.citiesStore.remove(id);
        })
      ) as Observable<void>;
  }

  private createNewCity(cityForm: CityForm) {
    return {
      ...cityForm,
      id: guid(),
      favorite: false,
    } as City;
  }

  private patchCity(cityForm: CityForm, id: string): Observable<City> {
    return this.http
      .patch<City>(`http://localhost:3333/api/cities/${id}`, {
        ...cityForm,
        id,
      })
      .pipe(
        tap(() => {
          this.citiesStore.update(id, cityForm);
        })
      ) as Observable<City>;
  }
}
