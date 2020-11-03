export class SlaDto {
    Id: number;
    HasTempratureBoundry: boolean;
    MaxTemprature: number;
    MinTemprature: number;
    TempratureCount: number;
    TempratureTime: string;

    HasHumidityBoundry: boolean;
    MaxHumidity: number;
    MinHumidity: number;
    HumidityCount: number;
    HumidityTime: string;

    HasPressureBoundry: boolean;
    MaxPressure: number;
    MinPressure: number;
    PressureCount: number;
    PressureTime: string;

    HasLocationBoundry: boolean;
    LocationBoundary: string;
    LocationCount: number;
    LocationTime: string;

    AssetId: number;

    CreatedAt: Date;
}
