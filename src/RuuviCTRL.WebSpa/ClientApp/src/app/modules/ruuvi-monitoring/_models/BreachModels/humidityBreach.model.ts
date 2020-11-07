export class HumidityBreachModel {
    humidity: number;

    maxHumidity: number;
    minHumidity: number;
    humidityCount: number;
    humidityTime: string;

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