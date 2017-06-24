import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminComponent } from './admin.component';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    RouterModule.forChild([
      { path: 'admin',
        component: AdminComponent,
        children: [
          { path: 'dashboard',  component: DashboardComponent },
        ]
      },
    ])
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
