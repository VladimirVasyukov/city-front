import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from '../../cities/cities.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { FavoriteModule } from '../../favorite/favorite.module';

const routes: Routes = [
  {
    path: '',
    component: CitiesComponent,
    children: [{ path: '', component: CitiesListComponent }],
  },
];

@NgModule({
  declarations: [CitiesListComponent, CityListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FavoriteModule],
  exports: [RouterModule, CitiesListComponent, CityListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListModule {}
