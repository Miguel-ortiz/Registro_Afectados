import 'pace';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { routing } from './app.routing';
import { AppConfig } from './app.config';

import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { Http } from "@angular/http";
import { AutenticacionService } from "./pages/login/autenticacion.service";







@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
    
    
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    }),
    routing 
     
  ],
  providers: [AppConfig],

  bootstrap: [AppComponent]
})
export class AppModule { }
