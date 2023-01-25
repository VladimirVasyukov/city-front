import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { City } from '../../../../_state/city.model';

@Component({
  selector: 'app-city-grid',
  templateUrl: './city-grid.component.html',
  styleUrls: ['./city-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityGridComponent {
  @Input() city: City;

  @Output() onChange = new EventEmitter<City>();
  @Output() deleteCity = new EventEmitter<string>();

  onFavorite(favorite: boolean) {
    this.onChange.emit({ ...this.city, favorite });
  }
}
