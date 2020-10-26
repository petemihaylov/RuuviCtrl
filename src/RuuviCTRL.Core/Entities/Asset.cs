using RuuviCTRL.SharedKernel.Base;

namespace RuuviCTRL.Core.Entities
{
    public class Asset : BaseEntity
    {
        public string DeviceId { get; set; }
        public string Name { get; set; }
    }
}
