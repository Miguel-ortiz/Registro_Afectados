import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarEventosComponent } from './listar-eventos.component';
import { AppComponent } from "../../app.component";
import { Http, HttpModule } from "@angular/http";

export const routes = [
  { path: '', component: ListarEventosComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpModule
  ],
  declarations: [ListarEventosComponent]
})
export class ListarEventosModule { }