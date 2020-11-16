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

    private textcolor: String;
    private data: SlaDto;

    //tempBreach;
    //pressureBreach;
    //humidityBreach;

    constructor(private assetdetailService: AssetDetailService) {
        //Add for loop for each ruuvi tag for multiple support
        this.slaData = this.assetdetailService.getSlasForAsset(1);
    }

    ngOnInit(): void {
        this.slaData.subscribe((sladata: SlaDto[]) => {
            this.data = sladata[sladata.length - 1];
        });
    }

    getTextColor(value: number, type: String) {
        this.textcolor = 'black';

        switch (type) {
            case 'Temperature':
                if (this.data.hasTempratureBoundry) {
                    if (value > this.data.maxTemprature || value < this.data.minTemprature) {
                        this.textcolor = 'red';
                    }
                }
                break;
            case 'Pressure':
                if (this.data.hasPressureBoundry) {
                    if (value > this.data.maxPressure || value < this.data.minPressure) {
                        this.textcolor = 'red';
                    }
                }
                break;
            case 'Humidity':
                if (this.data.hasHumidityBoundry) {
                    if (value > this.data.maxHumidity || value < this.data.minHumidity) {
                        this.textcolor = 'red';
                    }
                }
                break;
        }
        return this.textcolor;
    }
}
