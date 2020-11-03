using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.ValueObjects;
using System;
using System.Collections.Generic;

namespace RuuviCTRL.StorageApi.ApiModels
{
    public class RuuviInput
    {
        public string deviceId { get; set; }
        public int batteryLevel { get; set; }
        public List<RuuviTags> tags { get; set; }
        public RuuviLocation location { get; set; }
        public DateTime time { get; set; }

        public static RuuviData ToRuuviData(RuuviInput input)
        {
            return new RuuviData()
            {
                DeviceId = input.deviceId,
                BatteryLevel = input.batteryLevel,
                GpsAccuracy = input.location.accuracy,
                Latitude = input.location.latitude,
                Longitude = input.location.longitude,
                AccelX = input.tags[0].accelX,
                AccelY = input.tags[0].accelY,
                AccelZ = input.tags[0].accelZ,
                Humidity = input.tags[0].humidity,
                Pressure = input.tags[0].pressure,
                Temperature = input.tags[0].temperature,
                Time = input.time
            };
        }

        public static LiveRuuviOutput ToLiveRuuviOutput(RuuviInput input)
        {
            return new LiveRuuviOutput()
            {
                Temperature = new SingleStat { Value = input.tags[0].temperature, Time = input.time },
                BatteryLevel =
                    new SingleStat { Value = input.batteryLevel, Time = input.time },
                Humidity = new SingleStat { Value = input.tags[0].humidity, Time = input.time },
                Pressure = new SingleStat { Value = input.tags[0].pressure, Time = input.time },
                Route = new LocationStat
                {
                    Latitude = input.location.latitude,
                    Longitude = input.location.longitude,
                    Time = input.time
                }
            };
        }

        public class RuuviTags
        {
            public float accelX { get; set; }
            public float accelY { get; set; }
            public float accelZ { get; set; }
            public float humidity { get; set; }
            public float pressure { get; set; }
            public float temperature { get; set; }
        }

        public class RuuviLocation
        {
            public float accuracy { get; set; }
            public float latitude { get; set; }
            public float longitude { get; set; }
        }
    }
}
