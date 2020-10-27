import {CommonModule, DatePipe, DecimalPipe} from '@angular/common';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SlaComponent } from './sla/sla.component';
import {FormsModule} from '@angular/forms';
import {NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsComponent} from './settings.component';

@NgModule({
    declarations: [
      SettingsComponent,
      SlaComponent
    ],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        InlineSVGModule,
        NgApexchartsModule,
        NgApexchartsModule,
        FormsModule,
        NgbTimepickerModule,
        MatInputModule,
    ],
    providers: [DatePipe, DecimalPipe]
  })
  export class SettingsModule {}
