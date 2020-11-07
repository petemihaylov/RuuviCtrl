using System.Collections;
using System.Collections.Generic;
using RuuviCTRL.SharedKernel.Base;

namespace RuuviCTRL.Core.Entities
{
    public class Asset : BaseEntity
    {
        public string DeviceId { get; set; }
        public string Name { get; set; }

        public ICollection<Breach> Breaches { get; set; }

        public ICollection<SLAAgreement> SlaAgreements { get; set; }
    }
}
