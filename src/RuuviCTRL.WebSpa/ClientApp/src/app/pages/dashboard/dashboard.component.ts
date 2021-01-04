import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { of } from 'rxjs';
import { AssetDto } from './_models/assetDto.model';
import { NotificationDto } from './_models/notificationDto.model';
import { RuuviWebsocket } from './_models/ruuvi-websocket.model';
import { AssetDataService } from './_services/asset-data.service';
import { NotificationWebsocketService } from './_services/notification-websocket.service';
import { RuuviWebsocketService } from './_services/ruuvi-websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {

  assetSearch: string;

  private _notifications: BehaviorSubject<NotificationDto[]> = new BehaviorSubject([]);
  public Notifications: Observable<NotificationDto[]> = this._notifications.asObservable();
  private subscription: Subscription = new Subscription;
  

  private _data: BehaviorSubject<AssetDto[]> = new BehaviorSubject([]);
  public Data: Observable<AssetDto[]> = this._data.asObservable();
  public isShow = false;
  private unsubscribe: Subscription[] = [];

  public loadingAssets = false;
  
  constructor(
    private assetDataService: AssetDataService,
    private ruuviDataService: RuuviWebsocketService,
    private notificationWebsocketService: NotificationWebsocketService) { }


  ngOnInit(): void {
    this.searchAssets();

        // Alerts from Notification Websocket
    const websocketAlerts = this.notificationWebsocketService
      .retrieveMappedObject()
      .subscribe((receivedObj: NotificationDto) => {
        console.log("message");
        this.addToNotifications(receivedObj);
      });
    this.subscription.add(websocketAlerts);

    }

  deleteNotification(){
    this.isShow = !this.isShow;
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

  addToNotifications(obj: NotificationDto) {   
    if(this._notifications.getValue()[0] == undefined){
      of([obj]).subscribe(res =>{
          this._notifications.next(res);
      });
    }else { 
      const nextData = this._notifications.getValue();
      nextData.push(obj);
      this._notifications.next(nextData);
    }
  }


  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
    this.subscription.unsubscribe();
  }

  searchAssets(){
    this.loadingAssets = true;

    const listSub = this.assetDataService.search(this.assetSearch).subscribe(res => {
      this._data.next(res);

      const websocketSub = this.ruuviDataService
          .retrieveMappedObject()
          .subscribe((receivedObj: RuuviWebsocket) => {
            this.addToData(receivedObj);
          });
      this.unsubscribe.push(websocketSub);
      this.loadingAssets = false;
    });
    this.unsubscribe.push(listSub);
  }
}
