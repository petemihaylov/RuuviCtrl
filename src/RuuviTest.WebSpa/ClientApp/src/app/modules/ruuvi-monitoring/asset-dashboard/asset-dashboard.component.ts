import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RuuviData } from '../_models/ruuvi-data.model';
import { RuuviDataService } from '../_services/ruuvi-data.service';

@Component({
  selector: 'app-asset-dashboard',
  templateUrl: './asset-dashboard.component.html',
  styleUrls: ['./asset-dashboard.component.scss']
})
export class AssetDashboardComponent implements OnInit {

  Data: Observable<RuuviData[]>

  constructor(private ruuviDataService: RuuviDataService) { }

  ngOnInit(): void {
    this.Data = this.ruuviDataService.list().pipe();
  }

}
