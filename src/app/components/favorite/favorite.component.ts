import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  @Input() value!: boolean;
  @Output() onChange = new EventEmitter<boolean>();

  onClick() {
    this.onChange.emit(!this.value);
  }
}
