import { Component, OnInit } from '@angular/core';
import { RuuviDataService } from './_services/ruuvi-data.service';
import { RuuviData } from './_models/ruuvi-data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ruuvi-monitoring',
  templateUrl: './ruuvi-monitoring.component.html',
  styleUrls: ['./ruuvi-monitoring.component.scss']
})
export class RuuviMonitoringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
