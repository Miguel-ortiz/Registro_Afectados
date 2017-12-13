import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AutenticacionService } from "./autenticacion.service";
import { AppComponent } from "../../app.component";
import { Http, HttpModule } from "@angular/http";

export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpModule
  ],
  declarations: [LoginComponent],
  providers: [
       AutenticacionService
    ]
})

export class LoginModule { }
