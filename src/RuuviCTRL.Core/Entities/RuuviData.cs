
using RuuviTest.SharedKernel.Attributes;
using RuuviTest.SharedKernel.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace RuuviTest.Core.Entities
{
    [BsonCollection("ruuviData")]
    public class RuuviData : BaseDocument
    {
        public string DeviceId { get; set; }
        public int BatteryLevel { get; set; }
        public float GpsAccuracy { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }
        public float AccelX { get; set; }
        public float AccelY { get; set; }
        public float AccelZ { get; set; }
        public float Humidity { get; set; }
        public float Pressure { get; set; }
        public float Temperature { get; set; }
        public DateTime Time { get; set; }
    }

    
}
