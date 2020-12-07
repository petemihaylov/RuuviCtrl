using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RuuviCTRL.Core.Dto;

namespace RuuviCTRL.Core.Services.Interfaces
{
    public interface IAssetService
    {
        Task<AssetDto> GetAssetDtoById(int id);
        Task<AssetDto> GetAssetDtoById(int id, DateTime startDate, DateTime endDate);
        Task<List<AssetDto>> GetAssetDtos();
        Task<List<AssetDto>> GetAssetDtosBySearch(string search);
        Task<List<SLADto>> GetSlasByAssetId(int id);
        Task<List<BreachDto>> GetBreachesByAssetId(int id);
    }
}
