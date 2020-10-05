import { RuuviMonitoringComponent } from './ruuvi-monitoring.component';
import { StatsWidgetComponent } from './widgets/stats-widget/stats-widget.component';
import {CommonModule, DatePipe, DecimalPipe} from '@angular/common';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RuuviMonitoringRoutingModule } from './ruuvi-monitoring-routing.module';
import { AssetDashboardComponent } from './asset-dashboard/asset-dashboard.component';
import { MapWidgetComponent } from './widgets/map-widget/map-widget.component';
import {RuuviWebsocketService} from './_services/ruuvi-websocket.service';
import { AssetDetailService } from './_services/asset-detail.service';

@NgModule({
    declarations: [
      RuuviMonitoringComponent,
      StatsWidgetComponent,
      AssetDashboardComponent,
      MapWidgetComponent
    ],
    imports: [
      CommonModule,
      InlineSVGModule,
      NgApexchartsModule,
      RuuviMonitoringRoutingModule,
    ],
    providers: [AssetDetailService, RuuviWebsocketService, DatePipe, DecimalPipe]
  })
  export class RuuviMonitoringModule {}
