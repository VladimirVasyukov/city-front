import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { CitiesModule } from './modules/cities/cities.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    CitiesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
