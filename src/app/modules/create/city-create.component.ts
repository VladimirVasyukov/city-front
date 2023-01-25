import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { catchError, Subscription, tap } from 'rxjs';

import { CitiesService } from '../../_state/city.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityAddComponent implements OnInit {
  readonly CITY_NAME_INPUT_WARN_MESSAGE: string =
    'Поле "Название города" не может быть пустым. Введите название города';
  readonly CITY_DESCRIPTION_INPUT_WARN_MESSAGE: string =
    'Поле "Описание города" не может быть пустым. Введите описание города';
  readonly CITY_IMAGE_INPUT_WARN_MESSAGE: string =
    'Поле "Ссылка на картинку" не может быть пустым. Добавьте ссылку на картинку';
  readonly TITLE: string = 'Создание города';
  readonly CREATE: string = 'Создать';
  readonly SAVE: string = 'Сохранить';

  cityId: string;
  title: Data;
  subscriptionTitle$: Subscription;

  form: FormGroup = new FormGroup({
    cityName: new FormControl('', Validators.required),
    cityDescription: new FormControl('', Validators.required),
    cityImage: new FormControl('', Validators.required),
  });

  constructor(
    private service: CitiesService,
    private route: ActivatedRoute,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  get cityNameValidation(): boolean {
    return (this.form.get('cityName')?.invalid &&
      this.form.get('cityName')?.touched) as boolean;
  }

  get cityNameValidationMessage(): boolean {
    return this.form.get('cityName')?.errors?.['required'] as boolean;
  }

  get cityDescriptionValidation(): boolean {
    return (this.form.get('cityDescription')?.invalid &&
      this.form.get('cityDescription')?.touched) as boolean;
  }

  get cityDescriptionValidationMessage(): boolean {
    return this.form.get('cityDescription')?.errors?.['required'] as boolean;
  }

  get cityImageValidation(): boolean {
    return (this.form.get('cityImage')?.invalid &&
      this.form.get('cityImage')?.touched) as boolean;
  }

  get cityImageValidationMessage(): boolean {
    return this.form.get('cityImage')?.errors?.['required'] as boolean;
  }

  ngOnInit(): void {
    this.subscriptionTitle$ = this.activatedRoute.data
      .pipe(
        tap((data) => {
          this.title = data;
        })
      )
      .subscribe();

    this.cityId = this.route.snapshot.params['id'];
    if (this.cityId) {
      this.service
        .getCityById(this.cityId)
        .pipe(
          tap((city) => {
            if (city) {
              this.form.patchValue({
                cityName: city.name,
                cityDescription: city.description,
                cityImage: city.image,
              });
            }
          })
        )
        .subscribe();
    }
  }

  addCity() {
    const newCity = {
      name: this.form.value.cityName,
      description: this.form.value.cityDescription,
      image: this.form.value.cityImage,
    };
    this.service
      .addCity(newCity, this.cityId)
      .pipe(
        tap(() => {
          this.form.reset();
          this.router.navigate(['/list']);
        })
      )
      .subscribe();
  }
}
