import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { StatsWidget } from '../widgets/_models/stats-widget.model';
import { RuuviWebsocketService } from '../_services/ruuvi-websocket.service';
import { RuuviWebsocket } from '../_models/ruuvi-websocket.model';
import { map } from 'rxjs/operators';
import { AssetDto } from '../_models/assetDto.model';
import { AssetDetailService } from '../_services/asset-detail.service';
import { ActivatedRoute } from '@angular/router';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-asset-dashboard',
  templateUrl: './asset-dashboard.component.html',
  styleUrls: ['./asset-dashboard.component.scss']
})
export class AssetDashboardComponent implements OnInit, OnDestroy {
  _data: BehaviorSubject<AssetDto> = new BehaviorSubject(new AssetDto());
  public readonly Data: Observable<AssetDto> = this._data.asObservable();


  temperature: StatsWidget = {
    title: 'Temperature',
    measurementValue: '°C',
    icon: 'Weather/Temperature-half.svg',
    minValue: 18,
    maxValue: 26,
    digitsInfo: '1.2-2'
  };
  pressure: StatsWidget = {
    title: 'Pressure',
    measurementValue: 'Pa',
    icon: 'Weather/Wind.svg',
    minValue: 99,
    maxValue: 101,
    digitsInfo: '1.0-0'
  };
  humidity: StatsWidget = {
    title: 'Humidity',
    measurementValue: '%',
    icon: 'Weather/Rain5.svg',
    minValue: 0,
    maxValue: 100,
    digitsInfo: '1.2-2'
  };
  batteryLevel: StatsWidget = {
    title: 'Phone Battery Level',
    measurementValue: '%',
    icon: 'Devices/Battery-charging.svg',
    minValue: 0,
    maxValue: 100,
    digitsInfo: '1.0-0'
  };

  startDate: Date;
  endDate: Date;

  private unsubscribe: Subscription[] = [];

  constructor(
    private assetDetailService: AssetDetailService,
    private ruuviWebsocketService: RuuviWebsocketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {


    const paramsSub = this.route.parent.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number

      const detailsSub = this.assetDetailService.read(id).subscribe(res => {
        this._data.next(res);

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
  }

  selectedByDate(){
    if( this.startDate == undefined || this.endDate == undefined){
      return;
    }
    var start = this.DateToString(this.startDate);
    var end   = this.DateToString(this.endDate);
    
    const paramsSub = this.route.parent.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number
      
      const detailsSub = this.assetDetailService.readByDate(id,start,end).subscribe(res => {
        this._data.next(res);

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
  }
  public DateStartSelected(date: any):void {
    this.startDate = date;
}
public DateEndSelected(date: any):void {
  this.endDate = date;
}
  private DateToString(date :Date): string {
    var result = date.getDay() +"-" + date.getMonth() +"-" + date.getFullYear() +" 00:00:00";
    return result;
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

  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }
}
