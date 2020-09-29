using RuuviTest.SharedKernel.Base;

namespace RuuviTest.Core.Entities
{

    public class AssetDto : BaseEntity
    {
        public string DeviceId { get; set; }

        public string Name { get; set; }

        public float Temperature { get; set; }

        public float Humidity { get; set; }

        public float Pressure { get; set; }

        public float BatteryLevel { get; set; }
    }
}
