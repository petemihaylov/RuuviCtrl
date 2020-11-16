import { Component, OnInit, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { Observable, BehaviorSubject, Subscription } from "rxjs";
import { StatsWidget } from "../widgets/_models/stats-widget.model";
import { RuuviWebsocketService } from "../_services/ruuvi-websocket.service";
import { RuuviWebsocket } from "../_models/ruuvi-websocket.model";
import { map } from "rxjs/operators";
import { AssetDto } from "../_models/assetDto.model";
import { AssetDetailService } from "../_services/asset-detail.service";
import { ActivatedRoute } from "@angular/router";
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { BreachDto } from "../_models/breachDto.model";
import { SlaDto } from "../_models/slaDto.model";
import { TemperatureBreachModel } from "../_models/BreachModels/TemperatureBreach.model";
import { HumidityBreachModel } from "../_models/BreachModels/HumidityBreach.model";
import { PressureBreachModel } from "../_models/BreachModels/PressureBreach.model";
import { LocationBreachModel } from "../_models/BreachModels/locationBreach.model";
import { async } from "@angular/core/testing";
import { ObserversModule } from "@angular/cdk/observers";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-asset-dashboard",
  templateUrl: "./asset-dashboard.component.html",
  styleUrls: ["./asset-dashboard.component.scss"]
})
export class AssetDashboardComponent implements OnInit, OnDestroy {
  private dataSubject: BehaviorSubject<AssetDto>;
  public readonly Data$: Observable<AssetDto>;

  slas$: Observable<SlaDto[]>;
  breaches$: Observable<BreachDto[]>;

  assetId: number;

  data: BreachDto[] = [];

  temperatureBreach: TemperatureBreachModel[] = [];
  humidityBreach: HumidityBreachModel[] = [];
  pressureBreach: PressureBreachModel[] = [];
  locationBreach: LocationBreachModel[] = [];

  temperature: StatsWidget = {
    title: "Temperature",
    measurementValue: "°C",
    icon: "Weather/Temperature-half.svg",
    minValue: 18,
    maxValue: 26,
    digitsInfo: "1.2-2"
  };
  pressure: StatsWidget = {
    title: "Pressure",
    measurementValue: "Pa",
    icon: "Weather/Wind.svg",
    minValue: 99,
    maxValue: 101,
    digitsInfo: "1.0-0"
  };
  humidity: StatsWidget = {
    title: "Humidity",
    measurementValue: "%",
    icon: "Weather/Rain5.svg",
    minValue: 0,
    maxValue: 100,
    digitsInfo: "1.2-2"
  };
  batteryLevel: StatsWidget = {
    title: "Phone Battery Level",
    measurementValue: "%",
    icon: "Devices/Battery-charging.svg",
    minValue: 0,
    maxValue: 100,
    digitsInfo: "1.0-0"
  };

  warningClass = '';
  dangerClass = '';

  private unsubscribe: Subscription[] = [];

  constructor(
    private assetDetailService: AssetDetailService,
    private ruuviWebsocketService: RuuviWebsocketService,
    private route: ActivatedRoute,
    public datepipe: DatePipe
  ) {
    this.dataSubject = new BehaviorSubject<AssetDto>(null);
    this.Data$ = this.dataSubject.asObservable();
  }

  ngOnInit(): void {
    const paramsSub = this.route.parent.params.subscribe(params => {
      this.assetId = +params["id"]; // (+) converts string 'id' to a number

      this.breaches$ = this.assetDetailService.getBreachesForAsset(
        this.assetId
      );
      this.slas$ = this.assetDetailService.getSlasForAsset(this.assetId);

      const toDate = new Date(Date.now());
      const fromDate = new Date();
      fromDate.setDate(toDate.getDate() - 10);

      const detailsSub = this.assetDetailService
        .readByDate(this.assetId, this.DateToString(fromDate), this.DateToString(toDate))
        .subscribe(res => {
          console.log(res);
          this.dataSubject.next(res);

          const websocketSub = this.ruuviWebsocketService
            .retrieveMappedObject()
            .subscribe((receivedObj: RuuviWebsocket) => {
              this.addToData(receivedObj);
            });

          this.unsubscribe.push(websocketSub);
        });

      this.unsubscribe.push(detailsSub);
    });
    this.unsubscribe.push(paramsSub);

    this.PushBreachModel();
  }

  addToData(obj: RuuviWebsocket) {
    const nextData = this.dataSubject.getValue();
    nextData.temperature.push(obj.temperature);
    nextData.humidity.push(obj.humidity);
    nextData.pressure.push(obj.pressure);
    nextData.batteryLevel.push(obj.batteryLevel);
    nextData.route.push(obj.route);
    this.dataSubject.next(nextData);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

  selectedByDate(dateRange: any) {
    if (dateRange.fromDate == undefined || dateRange.toDate == undefined) {
      return;
    }
    let start = this.DateToString(dateRange.fromDate);
    let end = this.DateToString(dateRange.toDate);

    const detailsSub = this.assetDetailService
      .readByDate(this.assetId, start, end)
      .subscribe(res => {
        console.log(res);

        this.dataSubject.next(res);

        const websocketSub = this.ruuviWebsocketService
          .retrieveMappedObject()
          .subscribe((receivedObj: RuuviWebsocket) => {
            this.addToData(receivedObj);
          });

        this.unsubscribe.push(websocketSub);
      });
    this.unsubscribe.push(detailsSub);
  }

  private DateToString(date: Date): string {
    return this.datepipe.transform(date, "yyyy-MM-ddThh:mm:ss");
  }

  PushBreachModel() {
    this.breaches$.subscribe((breach: BreachDto[]) => {
      console.log(breach);
      breach.forEach(detail => {
        this.data.push(detail);
      });
      console.log(this.data);

      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].hasHumidityBreach) {
          this.humidityBreach.push(this.data[i]);
        }

        if (this.data[i].hasPressureBreach) {
          this.pressureBreach.push(this.data[i]);
        }

        if (this.data[i].hasTempratureBreach) {
          this.temperatureBreach.push(this.data[i]);
        }

        if (this.data[i].hasLocationBoundry) {
          this.locationBreach.push(this.data[i]);
        }
      }
    });
  }

  selectBreachClass(breach: BreachDto){
    if (
        ((breach.hasTempratureBreach && breach.hasTempratureBoundry) ||
        (breach.hasHumidityBreach && breach.hasHumidityBoundry) ||
        (breach.hasPressureBreach && breach.hasTempratureBoundry))  &&
        !breach.hasEnded
    ) {
      switch (breach.type) {
        case 1:
          return 'text-warning';
          break;
        case 2:
          return 'text-danger';
          break;
        default:
          return '';
          break;
      }
    }
    return '';
  }
}
