import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { AssetData } from '../_models/asset-data.model';
import { AssetDto } from '../_models/assetDto.model';

@Injectable({
    providedIn: 'root',
})

export class AssetDataService {

    private url = environment.apiUrl;
    private endpoint = 'api/assets';

    constructor(
    protected httpClient: HttpClient) {}

    read(id: number): Observable<AssetDto> {
    return this.httpClient
        .get<AssetDto>(`${this.url}/${this.endpoint}/${id}`);
    }

    list(): Observable<AssetDto[]> {
    return this.httpClient
        .get<AssetDto[]>(`${this.url}/${this.endpoint}`);
    }

    search(search: string): Observable<AssetDto[]> {
        const url = (search) ? `${this.url}/${this.endpoint}/searchByName?search=${search}` : `${this.url}/${this.endpoint}/searchByName`;
        console.log(url);
        return this.httpClient
        .get<AssetDto[]>(url);
    }
}
