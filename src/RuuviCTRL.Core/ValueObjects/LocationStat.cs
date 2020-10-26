using System;

namespace RuuviCTRL.Core.ValueObjects
{
    public class LocationStat
    {
        public float Latitude { get; set; }
        public float Longitude { get; set; }
        public DateTime Time { get; set; }
    }
}
