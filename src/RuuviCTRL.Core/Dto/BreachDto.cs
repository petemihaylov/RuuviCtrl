using System;
using System.Collections.Generic;
using System.Text;
using RuuviCTRL.Core.Enums;

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


        public float MaxTemprature { get; set; }
        public float MinTemprature { get; set; }
        public float TempratureCount { get; set; }
        public TimeSpan TempratureTime { get; set; }

        public float MaxHumidity { get; set; }
        public float MinHumidity { get; set; }
        public float HumidityCount { get; set; }
        public TimeSpan HumidityTime { get; set; }

        public float MinPressure { get; set; }
        public float MaxPressure { get; set; }
        public float PressureCount { get; set; }
        public TimeSpan PressureTime { get; set; }

        public string LocationBoundary { get; set; }
        public float LocationCount { get; set; }
        public TimeSpan LocationTime { get; set; }

        public int AssetId { get; set; }
        public int SlaAgreementId { get; set; }

        public BreachType Type { get; set; }

        public DateTime CreatedAt { get; set; }
        public bool HasEnded { get; set; }

        public DateTime EndDate { get; set; }

    }
}
