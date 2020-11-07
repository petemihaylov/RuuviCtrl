export class SlaDto {
    id: number;
    title: string;
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

    createdAt: Date;
}
