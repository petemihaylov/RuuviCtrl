import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { RuuviData } from "../_models/ruuvi-data.model";
import { RuuviDataService } from "../_services/ruuvi-data.service";
import { StatsWidget } from "../widgets/_models/stats-widget.model";
import { RuuviWebsocketService } from "../_services/ruuvi-websocket.service";
import { RuuviWebsocket } from "../_models/ruuvi-websocket.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-asset-dashboard",
  templateUrl: "./asset-dashboard.component.html",
  styleUrls: ["./asset-dashboard.component.scss"]
})
export class AssetDashboardComponent implements OnInit {
  _data: BehaviorSubject<RuuviData> = new BehaviorSubject(new RuuviData());
  public readonly Data: Observable<RuuviData> = this._data.asObservable();

  temperature: StatsWidget = {
    title: "Temperature",
    measurementValue: "°C",
    icon: "Weather/Temperature-half.svg"
  };
  pressure: StatsWidget = {
    title: "Pressure",
    measurementValue: "Pa",
    icon: "Weather/Wind.svg"
  };
  humidity: StatsWidget = {
    title: "Humidity",
    measurementValue: "%",
    icon: "Weather/Rain5.svg"
  };
  batteryLevel: StatsWidget = {
    title: "Battery Level",
    measurementValue: "%",
    icon: "Devices/Battery-charging.svg"
  };

  constructor(
    private ruuviDataService: RuuviDataService,
    private ruuviWebsocketService: RuuviWebsocketService,
    private _changeRef: ChangeDetectorRef
  ) {
    this.ruuviWebsocketService
      .retrieveMappedObject()
      .subscribe((receivedObj: RuuviWebsocket) => {
        this.addToData(receivedObj);
      });
  }

  ngOnInit(): void {
    this.ruuviDataService.list().subscribe(
      res => {
        this._data.next(res);
      }
    );

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
