using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RuuviTest.Core.ValueObjects;

namespace RuuviTest.Web.ApiModels
{
    public class LiveRuuviOutput
    {
        public SingleStat Temperature { get; set; }
        public SingleStat Humidity { get; set; }
        public SingleStat Pressure { get; set; }
        public SingleStat BatteryLevel { get; set; }
        public LocationStat Route { get; set; }
    }
}
