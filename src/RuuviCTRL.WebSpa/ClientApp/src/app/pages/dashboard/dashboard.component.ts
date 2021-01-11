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

  deleteNotification() {
    this.isShow = !this.isShow;
  }

  addToData(obj: RuuviWebsocket) {
    const nextData = this._data.getValue();

    let updateItem = nextData.find(this.findIndexToUpdate, obj.assetId);

    let index = nextData.indexOf(updateItem);

    nextData[index].temperature.push(obj.temperature);
    nextData[index].humidity.push(obj.humidity);
    nextData[index].pressure.push(obj.pressure);
    nextData[index].batteryLevel.push(obj.batteryLevel);
    nextData[index].route.push(obj.route);
    this._data.next(nextData);
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
