import { Component, OnInit, Input } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AssetData } from "./_models/asset-data.model";
import { AssetDto } from './_models/assetDto.model';
import { RuuviWebsocket } from './_models/ruuvi-websocket.model';
import { AssetDataService } from "./_services/asset-data.service";
import { RuuviWebsocketService } from './_services/ruuvi-websocket.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {


  private _data: BehaviorSubject<AssetDto> = new BehaviorSubject(new AssetDto());
  public Data: Observable<AssetDto> = this._data.asObservable();


  constructor(
    private assetDataService: AssetDataService,
    private ruuviDataService: RuuviWebsocketService) { }

  ngOnInit(): void {
    this.Data = this.assetDataService.list().pipe();

    this.ruuviDataService.startConnection();
    this.ruuviDataService.addAssetDataListener();
    this.ruuviDataService.retrieveMappedObject();
   
    const websocketSub = this.ruuviDataService
      .retrieveMappedObject()
      .subscribe((receivedObj: RuuviWebsocket) => {
        this.addToData(receivedObj);
      });
  }

  addToData(obj: RuuviWebsocket) {
    const nextData = this._data.getValue();
    nextData.temperature.push(obj.temperature);
    nextData.humidity.push(obj.humidity);
    nextData.pressure.push(obj.pressure);
    nextData.batteryLevel.push(obj.batteryLevel);
    nextData.route.push(obj.route);
    this._data.next(nextData);
  }
}
