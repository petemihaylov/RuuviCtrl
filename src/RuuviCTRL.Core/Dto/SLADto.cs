using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RuuviCTRL.Core.Entities;

namespace RuuviCTRL.Core.Dto
{
    public class SLADto
    {
        public int Id { get; set; }

        public string Title { get; set; }
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

        public bool HasLocationBoundry { get; set; }
        public string LocationBoundary { get; set; }
        public float LocationCount { get; set; }
        public TimeSpan LocationTime { get; set; }

        public Asset[] Assets { get; set; }

        public DateTime CreatedAt { get; set; }

        public SLADto()
        {
            
        }

        public SLADto(SLAAgreement sla)
        {
            Id = sla.Id;
            Title = sla.Title;
            HasTempratureBoundry = sla.HasTempratureBoundry;
            MaxTemprature = sla.MaxTemprature;
            MinTemprature = sla.MinTemprature;
            TempratureCount = sla.TempratureCount;
            TempratureTime = sla.TempratureTime;
            HasHumidityBoundry = sla.HasHumidityBoundry;
            MaxHumidity = sla.MaxHumidity;
            MinHumidity = sla.MinHumidity;
            HumidityCount = sla.HumidityCount;
            HumidityTime = sla.HumidityTime;
            HasPressureBoundry = sla.HasPressureBoundry;
            MaxPressure = sla.MaxPressure;
            MinPressure = sla.MinPressure;
            PressureCount = sla.PressureCount;
            PressureTime = sla.PressureTime;
            HasLocationBoundry = sla.HasLocationBoundry;
            LocationBoundary = sla.LocationBoundary;
            LocationCount = sla.LocationCount;
            LocationTime = sla.LocationTime;
            Assets = sla.AssetSlaAgreements != null
                ? sla.AssetSlaAgreements.Select(a => a.Asset).ToArray()
                : new Asset[]{};
            CreatedAt = sla.CreatedAt;
        }
    }
}
