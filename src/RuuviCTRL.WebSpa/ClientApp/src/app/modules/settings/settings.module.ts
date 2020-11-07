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
import { SlaEditComponent } from './sla-edit/sla-edit.component';
import { SlaMapComponent } from './widgets/sla-map/sla-map.component';
import { SlaService } from './_services/sla.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SlaFormComponent} from './widgets/sla-form/sla-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { SlaCreateComponent } from './sla-create/sla-create.component';

@NgModule({
    declarations: [
      SettingsComponent,
      SlaComponent,
      SlaEditComponent,
      SlaMapComponent,
      SlaFormComponent,
      SlaCreateComponent
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
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
    ],
    providers: [DatePipe, DecimalPipe, SlaService]
  })
  export class SettingsModule {}
