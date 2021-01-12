using System;
using System.Collections.Generic;

namespace GenerateMockinData.Entities
{
    public class RuuviInputData
    {
        public List<Tags> tags { get; set; }
        public int batteryLevel { get; set; }

        public string deviceId { get; set; }
        public Location location { get; set; }
        public DateTime time { get; set; }
    }
}