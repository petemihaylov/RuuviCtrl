using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Enums;
using System;

namespace RuuviCTRL.Core.Dto
{
    public class BreachDto
    {
        public float Humidity { get; set; }
        public float Pressure { get; set; }
        public float Temperature { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }


        public bool HasTempratureBreach { get; set; }
        public bool HasHumidityBreach { get; set; }
        public bool HasPressureBreach { get; set; }

        public bool HasTempratureBoundry { get; set; }
        public float MaxTemprature { get; set; }
        public float MinTemprature { get; set; }
        public float TempratureCount { get; set; }
        public TimeSpan TempratureTime { get; set; }

        public bool HasHumidityBoundry { get; set; }
        public float MaxHumidity { get; set; }
        public float MinHumidity { get; set; }
        public float HumidityCount { get; set; }
        public TimeSpan HumidityTime { get; set; }

        public bool HasPressureBoundry { get; set; }
        public float MinPressure { get; set; }
        public float MaxPressure { get; set; }
        public float PressureCount { get; set; }
        public TimeSpan PressureTime { get; set; }

        public bool HasLocationBreach { get; set; }
        public bool HasLocationBoundry { get; set; }
        public string LocationBoundary { get; set; }
        public float LocationCount { get; set; }
        public TimeSpan LocationTime { get; set; }

        public int AssetId { get; set; }
        public int SlaAgreementId { get; set; }
        public string SlaTitle { get; set; }


        public BreachType Type { get; set; }

        public DateTime CreatedAt { get; set; }
        public bool HasEnded { get; set; }

        public DateTime EndDate { get; set; }

        public BreachDto()
        {

        }
        public BreachDto(Breach breach)
        {
            MaxTemprature = breach.MaxTemprature;
            MinTemprature = breach.MinTemprature;
            TempratureCount = breach.TempratureCount;
            TempratureTime = breach.TempratureTime;
            MaxHumidity = breach.MaxHumidity;
            MinHumidity = breach.MinHumidity;
            HumidityCount = breach.HumidityCount;
            HumidityTime = breach.HumidityTime;
            MaxPressure = breach.MaxPressure;
            MinPressure = breach.MinPressure;
            PressureCount = breach.PressureCount;
            PressureTime = breach.PressureTime;
            LocationBoundary = breach.LocationBoundary;
            LocationCount = breach.LocationCount;
            LocationTime = breach.LocationTime;
            AssetId = breach.AssetId;
            SlaAgreementId = breach.SlaAgreementId;
            CreatedAt = breach.CreatedAt;
            EndDate = breach.EndDate;
            Temperature = breach.Temperature;
            Humidity = breach.Humidity;
            Pressure = breach.Pressure;
            Latitude = breach.Latitude;
            Longitude = breach.Longitude;
            HasTempratureBreach = breach.HasTempratureBreach;
            HasHumidityBreach = breach.HasHumidityBreach;
            HasPressureBreach = breach.HasPressureBreach;
            HasEnded = breach.HasEnded;
            HasLocationBreach = breach.HasLocationBreach;
            HasTempratureBoundry = breach.HasTempratureBoundry;
            HasHumidityBoundry = breach.HasHumidityBoundry;
            HasPressureBoundry = breach.HasPressureBoundry;
            HasLocationBoundry = breach.HasLocationBoundry;
            Type = breach.Type;
        }

    }
}
