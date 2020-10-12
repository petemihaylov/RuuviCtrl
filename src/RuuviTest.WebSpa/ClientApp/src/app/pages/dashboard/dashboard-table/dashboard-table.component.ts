import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetData } from '../_models/asset-data.model';
import { AssetDto } from '../_models/assetDto.model';
import { RuuviWebsocketService } from '../_services/ruuvi-websocket.service';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  @Input('assetData') assetData: Observable<AssetDto>;

  constructor() { }

  ngOnInit(): void {
  }

}
