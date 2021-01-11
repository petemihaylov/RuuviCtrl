using RuuviCTRL.Core.Dto;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Interfaces;
using RuuviCTRL.Core.Services.Interfaces;
using RuuviCTRL.SharedKernel.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RuuviCTRL.Core.Services
{
    public class SLAService : ISLAService
    {
        private readonly IEFRepository _eFRepository;
        private readonly IAssetSlaRepository _assetSlaRepository;

        public SLAService(IEFRepository eFRepository, IAssetSlaRepository assetSlaRepository)
        {
            _eFRepository = eFRepository;
            _assetSlaRepository = assetSlaRepository;
        }

        public async Task<SLADto> GetSLADtoById(int id)
        {
            var slaEntitie = await _eFRepository.GetByIdAsync<SLAAgreement>(id);

            if (slaEntitie == null)
                return null;

            var slaDto = new SLADto(slaEntitie);

            return slaDto;
        }

        public async Task<List<AssetDto>> GetAssetsForSla(int id)
        {
            var assetEntities = await _assetSlaRepository.AssetListBySlaAsync(id);
            return assetEntities.Select(a => new AssetDto(a)).ToList();
        }

        public async Task<AssetSLAAgreement> AddAssetToSla(int slaId, int assetId)
        {
            return await _assetSlaRepository.AddAsync(new AssetSLAAgreement(slaId, assetId));
        }

        public async Task RemoveAssetFromSla(int slaId, int assetId)
        {
            await _assetSlaRepository.DeleteAsync(new AssetSLAAgreement(slaId, assetId));
        }

        public async Task<List<SLADto>> GetSLADtos()
        {
            var slaEntities = await _assetSlaRepository.GetSlasWithAssets();
            var slaDtos = slaEntities.Select(s => new SLADto(s)).ToList();

            return slaDtos;
        }
    }
}
