import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ProfesorComponent } from '../profesor/profesor.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HttpClientModule } from '@angular/common/http'; //para usar peticiones http

@NgModule({
  declarations: [
    AppComponent,
    ProfesorComponent,
    FrutaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
