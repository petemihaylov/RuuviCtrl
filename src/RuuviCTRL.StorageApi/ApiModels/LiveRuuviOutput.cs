using RuuviCTRL.Core.ValueObjects;

namespace RuuviCTRL.StorageApi.ApiModels
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
