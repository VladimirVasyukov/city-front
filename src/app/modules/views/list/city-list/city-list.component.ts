import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { City } from '../../../../_state/city.model';

@Component({
  selector: 'app-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityListComponent {
  @Input() city: City;

  @Output() onChange = new EventEmitter<City>();
  @Output() deleteCity = new EventEmitter<string>();

  onFavorite(favorite: boolean) {
    this.onChange.emit({ ...this.city, favorite });
  }
}
