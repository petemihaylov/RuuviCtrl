import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
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
  
  private _notifications: BehaviorSubject<NotificationDto[]>;;
  public Notifications$: Observable<NotificationDto[]>;
  private unsubscribe: Subscription[] = [];

 
  extrasQuickPanelOffcanvasDirectionCSSClass = 'offcanvas-right';

  activeTabId:
    | 'kt_quick_panel_logs'
    | 'kt_quick_panel_notifications'
    | 'kt_quick_panel_settings' = 'kt_quick_panel_notifications';


  constructor(private layout: LayoutService, 
    private notificationDataService: NotificationDataService,
    private notificationWebsocketService: NotificationWebsocketService) {
      this._notifications = new BehaviorSubject<NotificationDto[]>([]);
      this.Notifications$ = this._notifications.asObservable();
    }

  ngOnInit(): void {
    this.extrasQuickPanelOffcanvasDirectionCSSClass = `offcanvas-${this.layout.getProp(
      'extras.quickPanel.offcanvas.direction'
    )}`;

    const listSub = this.notificationDataService.list().subscribe(res => {
      res.reverse();
      this._notifications.next(res);

      const websocketSub = this.notificationWebsocketService
      .retrieveMappedObject()
      .subscribe((receivedObj: NotificationDto) => {
        console.log("notification sidebar recieved")
        this.addToNotifications(receivedObj);
      });
      this.unsubscribe.push(websocketSub);
    });

    this.unsubscribe.push(listSub);
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
  }

  setActiveTabId(tabId) {
    this.activeTabId = tabId;
  }

  deleteNotification(id: any){
    this.notificationDataService.delete(id);

    const arr: NotificationDto[] = this._notifications.getValue();
    arr.forEach((item, index) => {
      if (item.id === id) { arr.splice(index, 1); }
    });

    this._notifications.next(arr);
  }

  getActiveCSSClasses(tabId) {
    if (tabId !== this.activeTabId) {
      return '';
    }
    return 'active show';
  }
}
