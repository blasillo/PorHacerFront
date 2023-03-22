import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorHacerListadoComponent } from './por-hacer-listado/por-hacer-listado.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PorHacerService} from "./por-hacer.service";

@NgModule({
  declarations: [
    AppComponent,
    PorHacerListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PorHacerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
