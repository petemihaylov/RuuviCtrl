using RuuviTest.Core.ValueObjects;
using RuuviTest.SharedKernel.Base;

namespace RuuviTest.Core.Entities
{

    public class AssetDto : BaseEntity
    {
        public SingleStat Temperature { get; set; }
        public SingleStat Humidity { get; set; }
        public SingleStat Pressure { get; set; }
        public SingleStat BatteryLevel { get; set; }
        public LocationStat Route { get; set; }

    }
}
