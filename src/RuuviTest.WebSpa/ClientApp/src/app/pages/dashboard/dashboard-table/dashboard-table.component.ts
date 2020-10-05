import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetData } from '../_models/asset-data.model';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  @Input('assetData') assetData: Observable<AssetData>;
  constructor() { }

  ngOnInit(): void {
  }

}
