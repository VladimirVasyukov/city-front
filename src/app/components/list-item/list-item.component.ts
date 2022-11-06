import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../../types';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() city!: City;
}
