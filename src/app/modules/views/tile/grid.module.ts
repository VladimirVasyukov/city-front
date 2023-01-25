import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from '../../cities/cities.component';
import { CitiesGridComponent } from './cities-grid/cities-grid.component';
import { CityGridComponent } from './city-grid/city-grid.component';
import { FavoriteModule } from '../../favorite/favorite.module';

const routes: Routes = [
  {
    path: '',
    component: CitiesComponent,
    children: [{ path: '', component: CitiesGridComponent }],
  },
];

@NgModule({
  declarations: [CitiesGridComponent, CityGridComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FavoriteModule],
  exports: [RouterModule, CitiesGridComponent, CityGridComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GridModule {}
