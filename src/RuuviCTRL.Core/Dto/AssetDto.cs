using System.Collections.Generic;
using System.Linq;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.ValueObjects;
using RuuviCTRL.SharedKernel.Base;

namespace RuuviCTRL.Core.Dto
{

    public class AssetDto : BaseEntity
    {
        public string DeviceId { get; set; }
        public string Name { get; set; }

        public SingleStat[] Temperature { get; set; }
        public SingleStat[] Humidity { get; set; }
        public SingleStat[] Pressure { get; set; }
        public SingleStat[] BatteryLevel { get; set; }
        public LocationStat[] Route { get; set; }

        public AssetDto(Asset asset, List<RuuviData> ruuviData)
        {
            Id = asset.Id;
            DeviceId = asset.DeviceId;
            Name = asset.Name;
            Temperature = ruuviData.Select(c => new SingleStat {Value = c.Temperature, Time = c.Time}).ToArray();
            BatteryLevel = ruuviData.Select(c => new SingleStat {Value = c.BatteryLevel, Time = c.Time}).ToArray();
            Humidity = ruuviData.Select(c => new SingleStat {Value = c.Humidity, Time = c.Time}).ToArray();
            Pressure = ruuviData.Select(c => new SingleStat {Value = c.Pressure, Time = c.Time}).ToArray();
            Route = ruuviData.Select(c => new LocationStat {Latitude = c.Latitude, Longitude = c.Longitude, Time = c.Time}).ToArray();
        }

        public AssetDto(Asset asset)
        {
            Id = asset.Id;
            DeviceId = asset.DeviceId;
            Name = asset.Name;
        }

    }
}
