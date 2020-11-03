import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import * as signalR from '@aspnet/signalr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NotificationDto } from '../_models/notificationDto.model';

@Injectable()
export class NotificationWebsocketService {
  private url = environment.apiUrl;

  // Set the endpoint to a proper one
  private endpoint = 'livenotification';

  private receivedMessageObject: NotificationDto = new NotificationDto();
  private sharedObj = new Subject<NotificationDto>();

  private connection: any = new signalR.HubConnectionBuilder()
    .withUrl(`${this.url}/${this.endpoint}`)
    .configureLogging(signalR.LogLevel.Information)
    .build();

  constructor(private http: HttpClient) {
    this.connection.onclose(async () => {
      await this.start();
    });
    this.connection.on('GetNewNotification', output => {
      this.mapReceivedMessage(output);
    });
    this.start();
  }

  // Strart the connection
  public async start() {
    try {
      await this.connection.start();
    } catch (err) {
      console.log(err);
      setTimeout(() => this.start(), 5000);
    }
  }

  public stop() {
    this.connection.stop();
  }

  private mapReceivedMessage(output: NotificationDto): void {
    this.receivedMessageObject = output;
    this.sharedObj.next(this.receivedMessageObject);
  }

  public retrieveMappedObject(): Observable<NotificationDto> {
    return this.sharedObj.asObservable();
  }
}
