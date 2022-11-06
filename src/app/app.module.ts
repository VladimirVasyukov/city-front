import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './components/favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    GridItemComponent,
    EditFormComponent,
    FavoriteComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
