import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WidgetsModule } from '../../_metronic/partials/content/widgets/widgets.module';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { HttpClient } from '@angular/common/http';
import { RuuviWebsocketService } from './_services/ruuvi-websocket.service';
import { NotificationWebsocketService } from './_services/notification-websocket.service';
import { DashboardMapComponent } from './dashboard-map/dashboard-map.component';
import { LeafletWidgetComponent } from './_widgets/leaflet-widget/leaflet-widget.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, DashboardTableComponent, DashboardMapComponent, LeafletWidgetComponent],
    imports: [
        CommonModule,
        WidgetsModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
            },
        ]),
        InlineSVGModule,
        FormsModule,
    ],
  providers: [HttpClient, RuuviWebsocketService, NotificationWebsocketService]
})
export class DashboardModule {}
