import { SingleStat } from './single-stat.model';
import { LocationStat } from './location-stat.model';

export class AssetDto {
    id: string;
    deviceId: string;
    name: string;
    temperature: SingleStat[];
    pressure: SingleStat[];
    humidity: SingleStat[];
    batteryLevel: SingleStat[];
    route: LocationStat[];
}
