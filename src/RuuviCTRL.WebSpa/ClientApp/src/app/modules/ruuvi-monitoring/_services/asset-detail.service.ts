import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { AssetDto } from '../_models/assetDto.model';
import { BreachDto } from '../_models/breachDto.model';
import { SlaDto } from '../_models/slaDto.model';

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

    getBreachesForAsset(id: number): Observable<BreachDto[]> {
        return this.httpClient
            .get<BreachDto[]>(`${this.url}/${this.endpoint}/${id}/breaches`);
    }

    getSlasForAsset(id: number): Observable<SlaDto[]> {
        return this.httpClient
            .get<SlaDto[]>(`${this.url}/${this.endpoint}/${id}/slas`);
    }
}
