import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {RuuviData} from '../_models/ruuvi-data.model';
import * as signalR from '@aspnet/signalr';
import {environment} from '../../../../environments/environment.prod';
import {RuuviWebsocket} from '../_models/ruuvi-websocket.model';

@Injectable({
  providedIn: 'root'
})
export class RuuviWebsocketService {

  private url = environment.apiUrl;
  private endpoint = 'liveasset';

  // tslint:disable-next-line:ban-types
  connectionEstablished = new Subject<Boolean>();
  ruuviAsset = new Subject<RuuviWebsocket>();
  private connection: signalR.HubConnection;

  constructor() { }

  connect(id: number) {
    if (!this.connection) {
      this.connection = new signalR.HubConnectionBuilder()
          .withUrl(`${this.url}/${this.endpoint}`)
          .build();

      this.connection.start().then(() => {
        console.log('Hub connection started');
        this.connectionEstablished.next(true);
      }).catch(err => console.log(err));

      this.connection.on('GetNewAssetData', (output) => {
        console.log('Received', output);
        this.ruuviAsset.next({
          batteryLevel: 0,
          humidity: 0,
          pressure: 0,
          route: undefined,
          temperature: 0});
      });
    }
  }


  disconnect() {
    if (this.connection) {
      this.connection.stop();
      this.connection = null;
    }
  }
}
