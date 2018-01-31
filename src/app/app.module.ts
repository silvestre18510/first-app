import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SonsComponent} from './sons/sons.component';

import { AppComponent } from './app.component';
import { DaughtersComponent } from './daughters/daughters.component';
import {FormsModule} from '@angular/forms';
import { AddsComponent } from './adds/adds.component';
import { ShowsComponent } from './shows/shows.component';

@NgModule({
  declarations: [
    AppComponent,SonsComponent, DaughtersComponent, AddsComponent, ShowsComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
