import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './components/main/dashboard.main.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardMainComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    ProfileComponent,
    ContentComponent
  ]
})
export class DashboardModule { }
