import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { of } from 'rxjs';
import { AssetDto } from './_models/assetDto.model';
import { NotificationDto } from './_models/notificationDto.model';
import { RuuviWebsocket } from './_models/ruuvi-websocket.model';
import { AssetDataService } from './_services/asset-data.service';
import { NotificationDataService } from './_services/notification-data.service';
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
    private notificationWebsocketService: NotificationWebsocketService,
    private notificationDataService: NotificationDataService) { }


  ngOnInit(): void {
    //this.searchAssets();

    // Alerts from Notification Websocket
    const websocketAlerts = this.notificationWebsocketService
      .retrieveMappedObject()
      .subscribe((receivedObj: NotificationDto) => {
        this.addToNotifications(receivedObj);
      });
    this.subscription.add(websocketAlerts);

    const websocketSub = this.ruuviDataService
      .retrieveMappedObject()
      .subscribe((receivedObj: RuuviWebsocket) => {
        this.addToData(receivedObj);
      });
    this.unsubscribe.push(websocketSub);

  }

  deleteNotification(id: any){
    this.notificationDataService.delete(id);

    const arr: NotificationDto[] = this._notifications.getValue();
    arr.forEach((item, index) => {
      if (item.id === id) { arr.splice(index, 1); }
    });

    this._notifications.next(arr);
  }

  addToData(obj: RuuviWebsocket) {
    const nextData = this._data.getValue();

    let updateItem = nextData.find(this.findIndexToUpdate, obj.assetId);

    let index = nextData.indexOf(updateItem);

    if (obj != null) {
      nextData[index].temperature.push(obj.temperature);
      obj.humidity ?? nextData[index].humidity.push(obj.humidity);
      obj.pressure ?? nextData[index].pressure.push(obj.pressure);
      obj.batteryLevel ?? nextData[index].batteryLevel.push(obj.batteryLevel);
      obj.route ?? nextData[index].route.push(obj.route);
      this._data.next(nextData);
    }
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  addToNotifications(obj: NotificationDto) {
    if (this._notifications.getValue()[0] == undefined) {
      of([obj]).subscribe(res => {
        this._notifications.next(res);
      });
    } else {
      const nextData = this._notifications.getValue();
      nextData.push(obj);
      this._notifications.next(nextData);
    }
  }


  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
    this.subscription.unsubscribe();
  }

  searchAssets() {
    this.loadingAssets = true;

    const listSub = this.assetDataService.search(this.assetSearch).subscribe(res => {
      let nextData = this._data.getValue();
      nextData = res;
      this._data.next(nextData);
      this.loadingAssets = false;
    });
    this.unsubscribe.push(listSub);
  }
}
