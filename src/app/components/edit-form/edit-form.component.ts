import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CityForm } from '../../types';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent {
  @Output() add = new EventEmitter<CityForm>();

  onSubmit(f: NgForm) {
    const cityObject = {
      image: f.value.image,
      name: f.value.name,
      description: f.value.description,
    };

    this.add.emit(cityObject);
  }
}
