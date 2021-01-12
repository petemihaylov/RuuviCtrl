using RuuviCTRL.Core.Dto;
using RuuviCTRL.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RuuviCTRL.Core.Services.Interfaces
{
    public interface ISLAService
    {
        Task<SLADto> GetSLADtoById(int id);
        Task<List<AssetDto>> GetAssetsForSla(int id);
        Task<List<SLADto>> GetSLADtos();
        Task<AssetSLAAgreement> AddAssetToSla(int slaId, int assetId);
        Task RemoveAssetFromSla(int slaId, int assetId);
    }
}
