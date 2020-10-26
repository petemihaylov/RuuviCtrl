import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import * as signalR from '@aspnet/signalr';
import { RuuviWebsocket } from '../_models/ruuvi-websocket.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RuuviWebsocketService {
  private url = environment.apiUrl;
  private endpoint = 'liveasset';

  private receivedMessageObject: RuuviWebsocket = new RuuviWebsocket();
  private sharedObj = new Subject<RuuviWebsocket>();

  private connection: any = new signalR.HubConnectionBuilder()
    .withUrl(`${this.url}/${this.endpoint}`)
    .configureLogging(signalR.LogLevel.Information)
    .build();

  constructor(private http: HttpClient) {
    this.connection.onclose(async () => {
      await this.start();
    });
    this.connection.on('GetNewAssetData', output => {
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

  private mapReceivedMessage(output: RuuviWebsocket): void {
    this.receivedMessageObject = output;
    this.sharedObj.next(this.receivedMessageObject);
  }

  public retrieveMappedObject(): Observable<RuuviWebsocket> {
    return this.sharedObj.asObservable();
  }
}
