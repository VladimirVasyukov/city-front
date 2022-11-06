import {
  Component,
  Input,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { City } from '../../types';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent {
  @Input() totalCities!: number;
  @Output() add = new EventEmitter<City>();

  onSubmit(f: NgForm) {
    const cityObject = {
      id: this.totalCities,
      image: f.value.image,
      name: f.value.name,
      description: f.value.description,
      favorite: false,
    };

    this.add.emit(cityObject);
  }
}
