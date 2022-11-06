import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../../types';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css'],
})
export class GridItemComponent {
  @Input() city!: City;
}
