using RuuviCTRL.SharedKernel.Base;
using System.Collections.Generic;

namespace RuuviCTRL.Core.Entities
{
    public class Asset : BaseEntity
    {
        public string DeviceId { get; set; }
        public string Name { get; set; }

        public ICollection<Breach> Breaches { get; set; }

        public ICollection<AssetSLAAgreement> AssetSlaAgreements { get; set; }
    }
}
