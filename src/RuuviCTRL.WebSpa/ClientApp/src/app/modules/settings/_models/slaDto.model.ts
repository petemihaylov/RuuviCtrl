export class SlaDto {
    Id: number;
    MaxTemprature: number;
    MinTemprature: number;
    TempratureCount: number;
    TempratureTime: string;

    MaxHumidity: number;
    MinHumidity: number;
    HumidityCount: number;
    HumidityTime: string;


    MaxPressure: number;
    MinPressure: number;
    PressureCount: number;
    PressureTime: string;


    LocationBoundary: string;
    LocationCount: number;
    LocationTime: string;

    AssetId: number;

    CreatedAt: Date;
}
