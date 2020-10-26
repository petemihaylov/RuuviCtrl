import { LocationStat } from './location-stat.model';
import { SingleStat } from './single-stat.model';

export class RuuviWebsocket {
    temperature: SingleStat;
    pressure: SingleStat;
    humidity: SingleStat;
    batteryLevel: SingleStat;
    route: LocationStat;
  }
