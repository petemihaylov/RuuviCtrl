import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WidgetsModule } from '../../_metronic/partials/content/widgets/widgets.module';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { HttpClient } from '@angular/common/http';
import { RuuviWebsocketService } from './_services/ruuvi-websocket.service';
import { NotificationWebsocketService } from './_services/notification-websocket.service';

@NgModule({
  declarations: [DashboardComponent, DashboardTableComponent],
  imports: [
    CommonModule,
    WidgetsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
  ],
  providers: [HttpClient, RuuviWebsocketService, NotificationWebsocketService]
})
export class DashboardModule {}
