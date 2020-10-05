using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using RuuviTest.Core.Dto;

namespace RuuviTest.Core.Services.Interfaces
{
    public interface IAssetService
    {
        Task<AssetDto> GetAssetDtoById(int id);
    }
}
