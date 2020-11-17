import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AssetDto} from '../../../pages/dashboard/_models/assetDto.model';

export class AssetsService {

    private url = environment.apiUrl;
    private endpoint = 'api/assets';

    constructor(
        protected httpClient: HttpClient) {
    }

    list(): Observable<AssetDto[]> {
        return this.httpClient
            .get<AssetDto[]>(`${this.url}/${this.endpoint}`);
    }
}
