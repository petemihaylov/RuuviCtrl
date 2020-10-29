import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { NotificationDto } from '../_models/notificationDto.model';


@Injectable({
    providedIn: 'root',
})

export class NotificationDataService {

    private url = environment.apiUrl;
    private endpoint = 'api/notifications';

    constructor(
    protected httpClient: HttpClient) {}

    read(id: number): Observable<NotificationDto> {
    return this.httpClient
        .get<NotificationDto>(`${this.url}/${this.endpoint}/${id}`);
    }

    list(): Observable<NotificationDto[]> {
    return this.httpClient
        .get<NotificationDto[]>(`${this.url}/${this.endpoint}`);
    }
}