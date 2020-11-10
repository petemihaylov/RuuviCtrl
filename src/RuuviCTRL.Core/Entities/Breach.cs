using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using RuuviCTRL.Core.Enums;
using RuuviCTRL.SharedKernel.Base;

namespace RuuviCTRL.Core.Entities
{
    public class Breach : BaseEntity
    {
        public float Humidity { get; set; }
        public float Pressure { get; set; }
        public float Temperature { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }

        public bool HasTempratureBreach => Temperature <= MinTemprature || Temperature >= MaxTemprature;
        public bool HasHumidityBreach => Humidity <= MinHumidity || Humidity >= MaxHumidity;
        public bool HasPressureBreach => Pressure <= MinPressure || Pressure >= MaxPressure;

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
        public int SlaAgreementId { get; set; }
        public string SlaTitle { get; set; }

        public BreachType Type { get; set; }

        public DateTime CreatedAt { get; set; }
        public bool HasEnded { get; set; }
        public DateTime EndDate { get; set; }

        public Breach()
        {
            
        }
        public Breach(Asset asset, RuuviData ruuviData, SLAAgreement slaAgreement, BreachType type)
        {
            AssetId = asset.Id;
            SlaAgreementId = slaAgreement.Id;
            SlaTitle = slaAgreement.Title;
            Temperature = ruuviData.Temperature;
            Humidity = ruuviData.Humidity;
            Pressure = ruuviData.Pressure;
            Longitude = ruuviData.Longitude;
            Latitude = ruuviData.Latitude;
            CreatedAt = ruuviData.Time;
            Type = type;

            HasTempratureBoundry = slaAgreement.HasTempratureBoundry;
            MaxTemprature = slaAgreement.MaxTemprature;
            MinTemprature = slaAgreement.MinTemprature;
            TempratureCount = slaAgreement.TempratureCount;
            TempratureTime = slaAgreement.TempratureTime;

            HasHumidityBoundry = slaAgreement.HasHumidityBoundry;
            MaxHumidity = slaAgreement.MaxHumidity;
            MinHumidity = slaAgreement.MinHumidity;
            HumidityCount = slaAgreement.HumidityCount;
            HumidityTime = slaAgreement.HumidityTime;

            HasPressureBoundry = slaAgreement.HasPressureBoundry;
            MaxPressure = slaAgreement.MaxPressure;
            MinPressure = slaAgreement.MinPressure;
            PressureCount = slaAgreement.PressureCount;
            PressureTime = slaAgreement.PressureTime;

            HasLocationBoundry = slaAgreement.HasLocationBoundry;
            LocationBoundary = slaAgreement.LocationBoundary;
            LocationCount = slaAgreement.LocationCount;
            LocationTime = slaAgreement.LocationTime;
        }

        public void EndBreach()
        {
            if (EndDate == DateTime.MinValue && HasEnded == false)
            {
                HasEnded = true;
                EndDate = DateTime.Now;
            }
        }
    }
}
