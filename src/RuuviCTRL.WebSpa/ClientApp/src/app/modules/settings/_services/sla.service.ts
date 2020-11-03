import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { SlaDto } from '../_models/slaDto.model';

@Injectable({
    providedIn: 'root',
})
export class SlaService {

    private url = environment.apiUrl;
    private endpoint = 'api/sla';

    constructor(
    protected httpClient: HttpClient) {}

    read(id: number): Observable<SlaDto> {
        return this.httpClient
            .get<SlaDto>(`${this.url}/${this.endpoint}/${id}`);
    }

    list(): Observable<SlaDto[]> {
        return this.httpClient
            .get<SlaDto[]>(`${this.url}/${this.endpoint}`);
    }

    post(sla: SlaDto): Observable<SlaDto> {
        return this.httpClient
            .post<SlaDto>(`${this.url}/${this.endpoint}`, sla);
    }
}
