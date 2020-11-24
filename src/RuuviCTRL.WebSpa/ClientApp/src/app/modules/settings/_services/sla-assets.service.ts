import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AssetDto} from '../../../pages/dashboard/_models/assetDto.model';

@Injectable({
  providedIn: 'root'
})
export class SlaAssetsService {

  private url = environment.apiUrl;
  private endpoint = 'api/assets';

  constructor(
      protected httpClient: HttpClient) {
  }

  list(): Observable<AssetDto[]> {
    return this.httpClient
        .get<AssetDto[]>(`${this.url}/${this.endpoint}`);
  }

  ActiveAssets(slaId: number) {
    return this.httpClient
        .get<AssetDto[]>(`${this.url}/api/sla/${slaId}/assets`);
  }

  AddAsset(slaId: number, assetId: number){
    return this.httpClient
        .post(`${this.url}/api/sla/${slaId}/add/${assetId}`, []);
  }

  RemoveAsset(slaId: number, assetId: number){
    return this.httpClient
        .post<AssetDto[]>(`${this.url}/api/sla/${slaId}/remove/${assetId}`);
  }
}
