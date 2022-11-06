import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../../types';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  @Input() city!: City;

  toggleFavorite() {
    this.city.favorite = !this.city.favorite;
  }
}
