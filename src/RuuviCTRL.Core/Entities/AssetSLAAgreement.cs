using System;
using System.Collections.Generic;
using System.Text;

namespace RuuviCTRL.Core.Entities
{
    public class AssetSLAAgreement
    {
        public int AssetId { get; set; }
        public Asset Asset { get; set; }
        public int SlaAgreementId { get; set; }
        public SLAAgreement SlaAgreement { get; set; }
    }
}
