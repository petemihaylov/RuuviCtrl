import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetData } from '../_models/asset-data.model';
import { AssetDto } from '../_models/assetDto.model';
import { RuuviWebsocketService } from '../_services/ruuvi-websocket.service';
import { BreachDto } from '../../../modules/ruuvi-monitoring/_models/breachDto.model';
import { SlaDto } from '../../../modules/settings/_models/slaDto.model';
import { AssetDetailService } from '../../../modules/ruuvi-monitoring/_services/asset-detail.service';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  @Input('assetData') assetData: Observable<AssetDto[]>;
  slaData: Observable<SlaDto[]>;

  //tempBreach;
  //pressureBreach;
  //humidityBreach;

    constructor(private assetdetailService: AssetDetailService) {
        this.slaData = this.assetdetailService.getSlasForAsset(1);
    }

    ngOnInit(): void {
        console.log(this.assetData);
        console.log(this.slaData);
    }

    getTextColor(value: number, type: String) {
        this.slaData.subscribe((sladata: SlaDto[]) => {
            var data = sladata[sladata.length - 1];

            switch (type) {
                case 'Temperature':
                    if (data.hasTempratureBoundry) {
                        if (value > data.maxTemprature || value < data.minTemprature) {
                            return 'red';
                        }
                    }
                    break;
                case 'Pressure':
                    if (data.hasPressureBoundry) {
                        if (value > data.maxPressure || value < data.minPressure) {
                            return 'red';
                        }
                    }
                    break;
                case 'Humidity':
                    if (data.hasHumidityBoundry) {
                        if (value > data.maxHumidity || value < data.minHumidity) {
                            return 'red';
                        }
                    }
                    break;
            }
        });

        return 'black';
    }

}
