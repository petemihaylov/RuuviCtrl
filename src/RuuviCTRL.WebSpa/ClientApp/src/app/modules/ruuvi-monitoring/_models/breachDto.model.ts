export class BreachDto {
    id: number;

    temperature: number;
    humidity: number;
    pressure: number;
    latitude: number;
    longitude: number;

    hasHumidityBreach: boolean;
    hasTempratureBreach: boolean;
    hasPressureBreach: boolean;


    hasTempratureBoundry: boolean;
    maxTemprature: number;
    minTemprature: number;
    tempratureCount: number;
    tempratureTime: string;

    hasHumidityBoundry: boolean;
    maxHumidity: number;
    minHumidity: number;
    humidityCount: number;
    humidityTime: string;

    hasPressureBoundry: boolean;
    maxPressure: number;
    minPressure: number;
    pressureCount: number;
    pressureTime: string;

    hasLocationBoundry: boolean;
    locationBoundary: string;
    locationCount: number;
    locationTime: string;

    assetId: number;
    slaAgreementId: number;

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
