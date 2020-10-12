import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { RuuviWebsocket } from '../_models/ruuvi-websocket.model';
import { Observable, Subject } from 'rxjs';
import * as signalR from '@aspnet/signalr';

@Injectable()
export class RuuviWebsocketService {

  private url = environment.apiUrl;
  private endpoint = 'liveasset';

  private receivedMessageObject: RuuviWebsocket = new RuuviWebsocket();
  private sharedObj = new Subject<RuuviWebsocket>();

  private hubConnection: signalR.HubConnection;


  constructor() { }

  public startConnection = () => {
    // intitializing the the hub connection  
    this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(`${this.url}/${this.endpoint}`)
        .withAutomaticReconnect()
        .configureLogging(signalR.LogLevel.Information)
        .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addAssetDataListener = () => {
    this.hubConnection.on('GetNewAssetData', output => {
      this.mapReceivedMessage(output);
    });
  }

  private mapReceivedMessage(output: RuuviWebsocket): void {
    this.receivedMessageObject = output;
    this.sharedObj.next(this.receivedMessageObject);
  }

  public retrieveMappedObject(): Observable<RuuviWebsocket> {
    return this.sharedObj.asObservable();
  }

}
