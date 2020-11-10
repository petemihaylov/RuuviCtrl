using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using RuuviCTRL.Core.Enums;
using RuuviCTRL.SharedKernel.Base;

namespace RuuviCTRL.Core.Entities
{
    public class SLAAgreement : BaseEntity
    {
        public string Title { get; set; }
        public bool HasTempratureBoundry { get; set; }
        public float MaxTemprature { get; set; }
        public float MinTemprature { get; set; }
        public float TempratureCount { get; set; }
        [Column(TypeName = "bigint")]
        public TimeSpan TempratureTime { get; set; }

        public bool HasHumidityBoundry { get; set; }
        public float MaxHumidity { get; set; }
        public float MinHumidity { get; set; }
        public float HumidityCount { get; set; }
        [Column(TypeName = "bigint")]
        public TimeSpan HumidityTime { get; set; }

        public bool HasPressureBoundry { get; set; }
        public float MinPressure { get; set; }
        public float MaxPressure { get; set; }
        public float PressureCount { get; set; }
        [Column(TypeName = "bigint")]
        public TimeSpan PressureTime { get; set; }

        public bool HasLocationBoundry { get; set; }
        public string LocationBoundary { get; set; }
        public float LocationCount { get; set; }
        [Column(TypeName = "bigint")]
        public TimeSpan LocationTime { get; set; }

        public int AssetId { get; set; }

        public DateTime CreatedAt { get; set; }


        public BreachType CheckBreach(RuuviData ruuviData, int tempratureCount, int humidityCount, int pressureCount)
        {
            bool hasTempratureBreach = ValueOutOfRange(ruuviData.Temperature, MinTemprature, MaxTemprature);
            bool hasHumidityBreach = ValueOutOfRange(ruuviData.Humidity, MinHumidity, MaxHumidity);
            bool hasPressureBreach = ValueOutOfRange(ruuviData.Pressure, MinPressure, MaxPressure);

            if (HasTempratureBoundry && hasTempratureBreach && tempratureCount + 1 >= TempratureCount)
                return BreachType.Breach;

            if (HasHumidityBoundry && hasHumidityBreach && humidityCount + 1 >= HumidityCount)
                return BreachType.Breach;

            if (HasPressureBoundry && hasPressureBreach && pressureCount + 1 >= PressureCount)
                return BreachType.Breach;

            if (HasTempratureBoundry && hasTempratureBreach)
                return BreachType.Warning;            

            if (HasHumidityBoundry && hasHumidityBreach)
                return BreachType.Warning;            

            if (HasPressureBoundry && hasPressureBreach)
                return BreachType.Warning;

            return BreachType.None;
        }

        private bool ValueOutOfRange(float value, float min, float max)
        {
            return value <= min || value >= max;
        }

        public void UpdateSla(SLAAgreement next)
        {
            Title = next.Title;
            HasTempratureBoundry = next.HasTempratureBoundry;
            MaxTemprature = next.MaxTemprature;
            MinTemprature = next.MinTemprature;
            TempratureCount = next.TempratureCount;
            TempratureTime = next.TempratureTime;
            HasHumidityBoundry = next.HasHumidityBoundry;
            MaxHumidity = next.MaxHumidity;
            MinHumidity = next.MinHumidity;
            HumidityCount = next.HumidityCount;
            HumidityTime = next.HumidityTime;
            HasPressureBoundry = next.HasPressureBoundry;
            MaxPressure = next.MaxPressure;
            MinPressure = next.MinPressure;
            PressureCount = next.PressureCount;
            PressureTime = next.PressureTime;
            HasLocationBoundry = next.HasLocationBoundry;
            LocationBoundary = next.LocationBoundary;
            LocationCount = next.LocationCount;
            LocationTime = next.LocationTime;
            AssetId = next.AssetId;
        }
    }
}
