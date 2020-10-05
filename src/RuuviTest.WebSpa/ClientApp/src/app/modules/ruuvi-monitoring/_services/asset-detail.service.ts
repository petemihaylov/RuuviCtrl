import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { AssetDto } from '../_models/assetDto.model';

@Injectable({
    providedIn: 'root',
})
export class AssetDetailService {

    private url = environment.apiUrl;
    private endpoint = 'api/assets';

    constructor(
    protected httpClient: HttpClient) {}

    read(id: number): Observable<AssetDto> {
    return this.httpClient
        .get<AssetDto>(`${this.url}/${this.endpoint}/${id}`);
    }
}
