import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CityAddComponent } from './city-create.component';
import { CitiesComponent } from '../cities/cities.component';

const routes: Routes = [
  {
    path: '',
    component: CitiesComponent,
    children: [{ path: '', component: CityAddComponent }],
  },
];

@NgModule({
  declarations: [CityAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule, CityAddComponent],
})
export class CityCreateModule {}
