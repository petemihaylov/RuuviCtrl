import { SingleStat } from './single-stat.model';
import { LocationStat } from './location-stat.model';

export class RuuviData {
    deviceId: string;
    id: string;
    name: string;
    temperature: SingleStat[];
    pressure: SingleStat[];
    humidity: SingleStat[];
    batteryLevel: SingleStat[];
    route: LocationStat[];
}
