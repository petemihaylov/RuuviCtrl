using RuuviCTRL.Core.Enums;
using RuuviCTRL.SharedKernel.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using GeoJSON.Net.Feature;
using GeoJSON.Net.Geometry;
using Newtonsoft.Json;

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

        public ICollection<AssetSLAAgreement> AssetSlaAgreements { get; set; }

        public DateTime CreatedAt { get; set; }


        public (BreachType, bool) CheckBreach(RuuviData ruuviData, int temperatureCount, int humidityCount, int pressureCount, int locationCount)
        {
            bool hasTemperatureBreach = ValueOutOfRange(ruuviData.Temperature, MinTemprature, MaxTemprature);
            bool hasHumidityBreach = ValueOutOfRange(ruuviData.Humidity, MinHumidity, MaxHumidity);
            bool hasPressureBreach = ValueOutOfRange(ruuviData.Pressure, MinPressure, MaxPressure);
            bool hasLocationBreach = HasLocationBreach(ruuviData.Latitude, ruuviData.Longitude);

            if (HasLocationBoundry && hasLocationBreach && locationCount + 1 >= LocationCount)
                return (BreachType.Breach, true);

            if (HasTempratureBoundry && hasTemperatureBreach && temperatureCount + 1 >= TempratureCount)
                return (BreachType.Breach, false);

            if (HasHumidityBoundry && hasHumidityBreach && humidityCount + 1 >= HumidityCount)
                return (BreachType.Breach, false);

            if (HasPressureBoundry && hasPressureBreach && pressureCount + 1 >= PressureCount)
                return (BreachType.Breach, false);

            if (HasLocationBoundry && hasLocationBreach)
                return (BreachType.Warning, true);

            if (HasTempratureBoundry && hasTemperatureBreach)
                return (BreachType.Warning, false);

            if (HasHumidityBoundry && hasHumidityBreach)
                return (BreachType.Warning, false);

            if (HasPressureBoundry && hasPressureBreach)
                return (BreachType.Warning, false);

            return (BreachType.None, false);
        }

        private bool ValueOutOfRange(float value, float min, float max)
        {
            return value <= min || value >= max;
        }

        private bool HasLocationBreach(double latitude, double longitude)
        {
            if (!string.IsNullOrEmpty(LocationBoundary))
            {
                FeatureCollection geoJson = JsonConvert.DeserializeObject<FeatureCollection>(LocationBoundary);
                foreach (var geoJsonFeature in geoJson.Features)
                {
                    var polygon = geoJsonFeature.Geometry as Polygon;

                    if (PointInPoly(polygon, new Point(new Position(latitude, longitude))))
                    {
                        return false;
                    }
                }

                return true;
            }

            return false;
        }

        private bool PointInPoly(Polygon poly, Point point)
        {
            bool isIn = false;
            int i, j, c = 0;
            var xPoint = point.Coordinates.Latitude;
            var yPoint = point.Coordinates.Longitude;
            var xCoords = poly.Coordinates.SelectMany(s => s.Coordinates.Select(position => position.Latitude)).ToArray();
            var yCoords = poly.Coordinates.SelectMany(s => s.Coordinates.Select(position => position.Longitude)).ToArray();
            for (i = 0, j = yCoords.Length - 1; i < yCoords.Length; j = i++)
            {
                if (yCoords[i] > yPoint != yCoords[j] > yPoint &&
                    xPoint < (xCoords[j] - xCoords[i]) * (yPoint - yCoords[i]) / (yCoords[j] - yCoords[i]) + xCoords[i])
                    isIn = !isIn;
            }
            return isIn;
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
            AssetSlaAgreements = next.AssetSlaAgreements;
        }
    }
}
