﻿using System.Collections.Generic;
using System.Threading.Tasks;
using RuuviCTRL.Core.Dto;

namespace RuuviCTRL.Core.Services.Interfaces
{
    public interface IAssetService
    {
        Task<AssetDto> GetAssetDtoById(int id);
        Task<List<AssetDto>> GetAssetDtos();
    }
}
