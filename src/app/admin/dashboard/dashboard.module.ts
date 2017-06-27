import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardInfoBoxesComponent } from './dashboard-info-boxes/dashboard-info-boxes.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [DashboardComponent, DashboardInfoBoxesComponent]
})
export class DashboardModule { }
