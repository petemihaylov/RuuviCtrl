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
import {MatSelectModule} from '@angular/material/select';
import { SlaEditComponent } from './widgets/sla-edit/sla-edit.component';
import { SlaMapComponent } from './widgets/sla-map/sla-map.component';
import { SlaService } from './_services/sla.service';

@NgModule({
    declarations: [
      SettingsComponent,
      SlaComponent,
      SlaEditComponent,
      SlaMapComponent
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
        MatSelectModule,
    ],
    providers: [DatePipe, DecimalPipe, SlaService]
  })
  export class SettingsModule {}
