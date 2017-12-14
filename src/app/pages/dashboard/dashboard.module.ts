import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DashboardComponent } from './dashboard.component';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';
import { ChartsModule } from 'ng2-charts';
import 'chart.js/dist/Chart.js';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    DirectivesModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardComponent,
    DynamicChartComponent
  ]
})

export class DashboardModule { }
