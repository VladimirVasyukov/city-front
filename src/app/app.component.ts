import { Component } from '@angular/core';
import { City } from './types';
import { View } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private allCities = [
    {
      id: 0,
      image: 'https://screenshots.enkod.tech/ilya_novikovG6KIVEp3v160xCMY.png',
      name: 'Москва',
      description: 'Столица России, город федерального значения',
      favorite: false,
    },
    {
      id: 1,
      image: 'https://screenshots.enkod.tech/ilya_novikovW7s6gLwAGDjaJbNL.png',
      name: 'Санкт-Петербург',
      description: 'Второй по численности населения город России',
      favorite: false,
    },
    {
      id: 2,
      image: 'https://screenshots.enkod.tech/ilya_novikovHyQpb3vrjFvTfzJJ.png',
      name: 'Новосибирск',
      description: 'Третий по численности населения город России',
      favorite: false,
    },
    {
      id: 3,
      image: 'https://screenshots.enkod.tech/ilya_novikovvUvY8ocQ8yIQg6Gi.png',
      name: 'Екатеринбург',
      description: 'Город-миллионник в России. Тоже красивый город',
      favorite: false,
    },
    {
      id: 4,
      image: 'https://screenshots.enkod.tech/ilya_novikovc2dbr7KvIJ2dknlZ.png',
      name: 'Казань',
      description: 'Город в России, столица Республики Татарстан.',
      favorite: false,
    },
    {
      id: 5,
      image: 'https://screenshots.enkod.tech/ilya_novikovHWEuBOtzexaZ3VQs.png',
      name: 'Нижний Новгород',
      description: 'Город в центральной России. Красивый город.',
      favorite: false,
    },
    {
      id: 6,
      image: 'https://screenshots.enkod.tech/ilya_novikovvjgSDr7xZl6A2UmH.png',
      name: 'Челябинск',
      description:
        'Город в Российской Федерации, седьмой по количеству жителей',
      favorite: false,
    },
  ];

  totalCities = this.allCities.length;

  get cities() {
    return this.allCities;
  }

  view: View = 'list';
  prevView: View | undefined;

  changeView(view: View) {
    this.prevView = this.view;
    this.view = view;
  }

  toggleListView() {
    this.changeView('list');
  }

  toggleTileView() {
    this.changeView('grid');
  }

  toggleCreateView() {
    this.changeView('edit');
  }

  addNewCity(city: City) {
    this.changeView(this.prevView || 'list');
    this.allCities.unshift(city);
  }
}
