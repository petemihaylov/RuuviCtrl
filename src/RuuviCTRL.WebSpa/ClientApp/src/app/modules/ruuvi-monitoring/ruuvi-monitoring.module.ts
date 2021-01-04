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
import { NgbdDatepickerRangeComponent } from './ngbd-datepicker-range/ngbd-datepicker-range.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@NgModule({
    declarations: [
      RuuviMonitoringComponent,
      StatsWidgetComponent,
      AssetDashboardComponent,
      MapWidgetComponent,
      NgbdDatepickerRangeComponent
      
    ],
    imports: [
      CommonModule,
      InlineSVGModule,
      NgApexchartsModule,
      RuuviMonitoringRoutingModule,
      FormsModule, NgbModule
    ],
    providers: [AssetDetailService, RuuviWebsocketService, DatePipe, DecimalPipe]
  })
  export class RuuviMonitoringModule {}
