import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './cities.component';

const ListOrGridTitle = { title: 'Список городов' };
const CreateTitle = { title: 'Создание города' }; // createRouteData
const EditTitle = { title: 'Редактирование города' };

const routes: Routes = [
  // { path: '', component: CitiesComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    data: ListOrGridTitle,
    loadChildren: () =>
      import('../views/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'tile',
    data: ListOrGridTitle,
    loadChildren: () =>
      import('../views/tile/grid.module').then((m) => m.GridModule),
  },
  {
    path: 'create',
    data: CreateTitle,
    loadChildren: () =>
      import('../create/create.module').then((m) => m.CityCreateModule),
  },
  {
    path: 'edit/:id',
    data: EditTitle,
    loadChildren: () =>
      import('../create/create.module').then((m) => m.CityCreateModule),
  },
];

@NgModule({
  declarations: [CitiesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CitiesModule {}
