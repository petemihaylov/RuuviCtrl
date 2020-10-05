import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { AssetData } from '../_models/asset-data.model';

@Injectable({
    providedIn: 'root',
})

export class AssetDataService {

    private url = environment.apiUrl;
    private endpoint = 'api/assets';

    constructor(
    protected httpClient: HttpClient) {}

    read(id: number): Observable<AssetData> {
    return this.httpClient
        .get<AssetData>(`${this.url}/${this.endpoint}/${id}`);
    }

    list(): Observable<AssetData> {
    return this.httpClient
        .get<AssetData>(`${this.url}/${this.endpoint}`);
    }
}