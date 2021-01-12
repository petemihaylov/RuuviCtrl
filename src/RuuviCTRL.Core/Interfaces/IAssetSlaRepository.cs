using RuuviCTRL.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RuuviCTRL.Core.Interfaces
{
    public interface IAssetSlaRepository
    {
        Task<List<SLAAgreement>> GetSlasWithAssets();

        Task<List<Asset>> AssetListBySlaAsync(int slaId);

        Task<List<SLAAgreement>> SlaListByAssetAsync(int assetId);

        Task<AssetSLAAgreement> AddAsync(AssetSLAAgreement entity);

        Task DeleteAsync(AssetSLAAgreement entity);
    }
}
