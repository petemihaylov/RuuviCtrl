export class PressureBreachModel {
    pressure: number;

    maxPressure: number;
    minPressure: number;
    pressureCount: number;
    pressureTime: string;

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