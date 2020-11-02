import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { LayoutService } from '../../../../../core';
import { NotificationDto } from './_models/notificationDto.model';
import { NotificationDataService } from './_sevices/notification-data.service';
import { NotificationWebsocketService } from './_sevices/notification-websocket.service';

@Component({
  selector: 'app-quick-panel-offcanvas',
  templateUrl: './quick-panel-offcanvas.component.html',
  styleUrls: ['./quick-panel-offcanvas.component.scss'],
})
export class QuickPanelOffcanvasComponent implements OnInit {
  
  private _data: BehaviorSubject<NotificationDto[]> = new BehaviorSubject([]);
  public Data: Observable<NotificationDto[]> = this._data.asObservable();
  private unsubscribe: Subscription[] = [];

 
  extrasQuickPanelOffcanvasDirectionCSSClass = 'offcanvas-right';

  activeTabId:
    | 'kt_quick_panel_logs'
    | 'kt_quick_panel_notifications'
    | 'kt_quick_panel_settings' = 'kt_quick_panel_notifications';


  constructor(private layout: LayoutService, 
    private notificationDataService: NotificationDataService,
    private notificationWebsocketService: NotificationWebsocketService) {}

  ngOnInit(): void {
    this.extrasQuickPanelOffcanvasDirectionCSSClass = `offcanvas-${this.layout.getProp(
      'extras.quickPanel.offcanvas.direction'
    )}`;

    const listSub = this.notificationDataService.list().subscribe(res => {
      res.reverse();
      this._data.next(res);

      const websocketSub = this.notificationWebsocketService
      .retrieveMappedObject()
      .subscribe((receivedObj: NotificationDto) => {
        this.addToData(receivedObj);
      });
      this.unsubscribe.push(websocketSub);
    });

    this.unsubscribe.push(listSub);
    console.log(this.Data);
  }

  addToData(obj: NotificationDto) {
    const nextData = this._data.getValue();
    nextData[0].id = obj.id;
    nextData[0].title = obj.title;
    nextData[0].description = obj.description;
    nextData[0].type = obj.type;
    nextData[0].createAt = obj.createAt;
    this._data.next(nextData);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }

  setActiveTabId(tabId) {
    this.activeTabId = tabId;
  }

  deleteNotification(id: any){
    this.notificationDataService.delete(id);

    const arr: NotificationDto[] = this._data.getValue();
    arr.forEach((item, index) => {
      if (item.id === id) { arr.splice(index, 1); }
    });

    this._data.next(arr);
  }

  getActiveCSSClasses(tabId) {
    if (tabId !== this.activeTabId) {
      return '';
    }
    return 'active show';
  }
}
