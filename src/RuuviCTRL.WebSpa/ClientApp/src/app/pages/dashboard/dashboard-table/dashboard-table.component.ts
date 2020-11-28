import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AssetData } from '../_models/asset-data.model';
import { AssetDto } from '../_models/assetDto.model';
import { RuuviWebsocketService } from '../_services/ruuvi-websocket.service';
import { BreachDto } from '../../../modules/ruuvi-monitoring/_models/breachDto.model';
import { SlaDto } from '../../../modules/settings/_models/slaDto.model';
import { AssetDetailService } from '../../../modules/ruuvi-monitoring/_services/asset-detail.service';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-dashboard-table',
    templateUrl: './dashboard-table.component.html',
    styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

    @Input('assetData') assetData: Observable<AssetDto[]>;
    slaData: Observable<SlaDto[]>;
    private slas: Map<number, SlaDto[]>;


    // Issue 62-63
    private textcolor: string;
    private data: SlaDto;

    // tempBreach;
    // pressureBreach;
    // humidityBreach;

    constructor(private assetdetailService: AssetDetailService) {
        // Add for loop for each ruuvi tag for multiple support
        this.slaData = this.assetdetailService.getSlasForAsset(1);
        this.slas = new Map<number, SlaDto[]>();
    }

    ngOnInit(): void {
        this.slaData.subscribe((sladata: SlaDto[]) => {
            this.data = sladata[sladata.length - 1];
        });
    }

    getTextColor(value: number, type: string, sla: SlaDto) {
        this.textcolor = 'black';

        switch (type) {
            case 'Temperature':
                if (sla.hasTempratureBoundry) {
                    if (value > sla.maxTemprature || value < sla.minTemprature) {
                        this.textcolor = 'red';
                    }
                }
                break;
            case 'Pressure':
                if (sla.hasPressureBoundry) {
                    if (value > sla.maxPressure || value < sla.minPressure) {
                        this.textcolor = 'red';
                    }
                }
                break;
            case 'Humidity':
                if (sla.hasHumidityBoundry) {
                    if (value > sla.maxHumidity || value < sla.minHumidity) {
                        this.textcolor = 'red';
                    }
                }
                break;
        }
        return this.textcolor;
    }


    getBoundary(sla: SlaDto, type: string) {
        let boundaries = '';

        switch (type) {
            case 'Temperature':
                if (sla.hasTempratureBoundry) {
                    boundaries = sla.minTemprature + ' - ' + sla.maxTemprature;
                }
                break;
            case 'Pressure':
                if (sla.hasPressureBoundry) {
                    boundaries = sla.minPressure + ' - ' + sla.maxPressure;
                }
                break;
            case 'Humidity':
                if (sla.hasHumidityBoundry) {
                    boundaries = sla.minHumidity + ' - ' + sla.maxHumidity;
                }
                break;
        }

        return boundaries;
    }

    getSla(assetId: number): Observable<SlaDto[]>{
        if(this.slas.has(assetId)){
            return of(this.slas.get(assetId));
        }
        return this.slaData = this.assetdetailService.getSlasForAsset(assetId).pipe(tap(res => this.slas.set(assetId, res)));
    }
}
