import { Observable } from 'rxjs';
import { RuuviData } from '../_models/ruuvi-data.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RuuviDataService {

    private url = environment.apiUrl;
    private endpoint = 'RuuviData';

    constructor(
    protected httpClient: HttpClient) {}

    read(id: number): Observable<RuuviData> {
    return this.httpClient
        .get<RuuviData>(`${this.url}/${this.endpoint}/${id}`);
    }

    list(): Observable<RuuviData> {
    return this.httpClient
        .get<RuuviData>(`${this.url}/${this.endpoint}`);
    }
}