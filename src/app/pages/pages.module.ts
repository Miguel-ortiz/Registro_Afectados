import { NgModule , ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../theme/directives/directives.module';
import { PipesModule } from '../theme/pipes/pipes.module';
import { routing } from './pages.routing';
import { PagesComponent } from './pages.component';
import { MenuComponent } from '../theme/components/menu/menu.component';
import { NavbarComponent } from '../theme/components/navbar/navbar.component';
import { MessagesComponent } from '../theme/components/messages/messages.component';
import { BreadcrumbComponent } from '../theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from '../theme/components/back-top/back-top.component';
import { RegisterComponent } from './register/register.component';
import { RegistroFamiliarComponent } from './registro-familiar/registro-familiar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DireccionComponent } from "../theme/components/direccion/direccion.component";




@NgModule({
  declarations: [ 
    PagesComponent,
    MenuComponent,
    NavbarComponent,
    MessagesComponent,
    BreadcrumbComponent,
    BackTopComponent,
    DireccionComponent,
    RegistroFamiliarComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    routing,
    HttpModule,
    FormsModule,
    ReactiveFormsModule ,
    JsonpModule
   //,NgbModule.forRoot() 
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
