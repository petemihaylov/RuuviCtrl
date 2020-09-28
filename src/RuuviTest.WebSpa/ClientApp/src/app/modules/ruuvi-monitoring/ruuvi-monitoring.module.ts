import { RuuviMonitoringComponent } from './ruuvi-monitoring.component';
import { StatsWidgetComponent } from './widgets/stats-widget/stats-widget.component';
import {CommonModule, DatePipe, DecimalPipe} from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RuuviDataService } from './_services/ruuvi-data.service';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RuuviMonitoringRoutingModule } from './ruuvi-monitoring-routing.module';
import { AssetDashboardComponent } from './asset-dashboard/asset-dashboard.component';
import {RuuviWebsocketService} from './_services/ruuvi-websocket.service';

@NgModule({
    declarations: [
      RuuviMonitoringComponent,
      StatsWidgetComponent,
      AssetDashboardComponent
    ],
    imports: [
      CommonModule,
      InlineSVGModule,
      NgApexchartsModule,
      RuuviMonitoringRoutingModule,
    ],
    providers: [RuuviDataService, RuuviWebsocketService, DatePipe, DecimalPipe]
  })
  export class RuuviMonitoringModule {}
