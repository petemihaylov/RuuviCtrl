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

        public AssetSLAAgreement()
        {
            
        }

        public AssetSLAAgreement(int slaId, int assetId)
        {
            SlaAgreementId = slaId;
            AssetId = assetId;
        }
    }
}
