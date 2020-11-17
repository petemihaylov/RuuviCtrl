using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using RuuviCTRL.Core.Dto;

namespace RuuviCTRL.Core.Services.Interfaces
{
    public interface ISLAService
    {
        Task<SLADto> GetSLADtoById(int id);
        Task<List<AssetDto>> GetAssetsForSla(int id);
        Task<List<SLADto>> GetSLADtos();
    }
}
