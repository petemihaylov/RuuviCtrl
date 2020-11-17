import { BreachType } from './BreachType.enum';

export class TemperatureBreachModel {
    temperature: number;

    maxTemprature: number;
    minTemprature: number;
    tempratureCount: number;
    tempratureTime: string;

    type: BreachType;

    createdAt: Date;

    hasEnded: boolean;
    endDate: Date;
}

