import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AssetData } from './_models/asset-data.model';
import { AssetDto } from './_models/assetDto.model';
import { RuuviWebsocket } from './_models/ruuvi-websocket.model';
import { AssetDataService } from './_services/asset-data.service';
import { RuuviWebsocketService } from './_services/ruuvi-websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {


  private _data: BehaviorSubject<AssetDto[]> = new BehaviorSubject([]);
  public Data: Observable<AssetDto[]> = this._data.asObservable();

  private unsubscribe: Subscription[] = [];

  constructor(
    private assetDataService: AssetDataService,
    private ruuviDataService: RuuviWebsocketService) { }


  ngOnInit(): void {
    const listSub = this.assetDataService.list().subscribe(res => {
      this._data.next(res);

      const websocketSub = this.ruuviDataService
      .retrieveMappedObject()
      .subscribe((receivedObj: RuuviWebsocket) => {
        this.addToData(receivedObj);
      });
      this.unsubscribe.push(websocketSub);

    });
    this.unsubscribe.push(listSub);

  }

  addToData(obj: RuuviWebsocket) {
    const nextData = this._data.getValue();
    nextData[0].temperature.push(obj.temperature);
    nextData[0].humidity.push(obj.humidity);
    nextData[0].pressure.push(obj.pressure);
    nextData[0].batteryLevel.push(obj.batteryLevel);
    nextData[0].route.push(obj.route);
    this._data.next(nextData);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }
}
