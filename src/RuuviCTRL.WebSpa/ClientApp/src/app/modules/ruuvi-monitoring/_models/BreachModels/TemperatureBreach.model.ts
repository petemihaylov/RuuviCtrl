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

export enum BreachType {
    None,
    Warning,
    Breach
}