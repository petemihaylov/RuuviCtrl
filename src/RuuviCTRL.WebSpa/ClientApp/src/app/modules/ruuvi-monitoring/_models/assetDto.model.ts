import { SingleStat } from './single-stat.model';
import { LocationStat } from './location-stat.model';

export class AssetDto {
    id: number;
    deviceId: string;
    name: string;
    temperature: SingleStat[];
    pressure: SingleStat[];
    humidity: SingleStat[];
    batteryLevel: SingleStat[];
    route: LocationStat[];
}
