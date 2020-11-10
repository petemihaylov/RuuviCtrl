import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetData } from '../_models/asset-data.model';
import { AssetDto } from '../_models/assetDto.model';
import { RuuviWebsocketService } from '../_services/ruuvi-websocket.service';
import { BreachDto } from '../../../modules/ruuvi-monitoring/_models/breachDto.model';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  @Input('assetData') assetData: Observable<AssetDto[]>;
  @Input('breachData') breachData: Observable<BreachDto[]>;

  //tempBreach;
  //pressureBreach;
  //humidityBreach;

  constructor() { }

  ngOnInit(): void {
  }

}
