using System;
using System.Collections.Generic;
using System.Text;

namespace RuuviTest.Core.ValueObjects
{
    public class LocationStat
    {
        public float Latitude { get; set; }
        public float Longitude { get; set; }
        public DateTime Time { get; set; }
    }
}
