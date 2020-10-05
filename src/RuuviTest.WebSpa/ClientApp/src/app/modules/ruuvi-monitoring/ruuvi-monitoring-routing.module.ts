import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuuviMonitoringComponent } from './ruuvi-monitoring.component';
import { AssetDashboardComponent } from './asset-dashboard/asset-dashboard.component';

const routes: Routes = [
  {
    path: ':id',
    component: RuuviMonitoringComponent,
    children: [
      {
        path: 'overview',
        component: AssetDashboardComponent,
      },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuuviMonitoringRoutingModule {}
