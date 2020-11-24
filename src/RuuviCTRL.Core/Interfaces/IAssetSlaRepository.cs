using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using RuuviCTRL.Core.Entities;

namespace RuuviCTRL.Core.Interfaces
{
    public interface IAssetSlaRepository
    {
        Task<List<Asset>> AssetListBySlaAsync(int slaId);

        Task<List<SLAAgreement>> SlaListByAssetAsync(int assetId);

        Task<AssetSLAAgreement> AddAsync(AssetSLAAgreement entity);

        Task DeleteAsync(AssetSLAAgreement entity);
    }
}
