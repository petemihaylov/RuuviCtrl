using RuuviCTRL.Core.Dto;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Interfaces;
using RuuviCTRL.Core.Services.Interfaces;
using RuuviCTRL.SharedKernel.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace RuuviCTRL.Core.Services
{
    public class AssetService : IAssetService
    {
        private readonly IMongoRepository<RuuviData> _repository;
        private readonly IEFRepository _eFRepository;
        private readonly IAssetSlaRepository _assetSlaRepository;

        public AssetService(IMongoRepository<RuuviData> repository, IEFRepository eFRepository, IAssetSlaRepository assetSlaRepository)
        {
            _repository = repository;
            _eFRepository = eFRepository;
            _assetSlaRepository = assetSlaRepository;
        }

        public async Task<AssetDto> GetAssetDtoById(int id)
        {
            var assetDto = await GetAssetDtoById(id, DateTime.MinValue, DateTime.MaxValue);
            return assetDto;
        }

        public async Task<AssetDto> GetAssetDtoById(int id, DateTime startDate, DateTime endDate)
        {
            var asset = await _eFRepository.GetByIdAsync<Asset>(id);
            if (asset == null)
                return null;

            var ruuviData = _repository.FilterBy(s => s.DeviceId == asset.DeviceId).ToList();

            var selectedRuuviData = ruuviData.Where(x => x.Time.Date >= startDate.Date && x.Time.Date <= endDate).ToList();

            if (selectedRuuviData.Count == 0)
                return null;

            var assetDto = new AssetDto(asset, selectedRuuviData);

            return assetDto;
        }
        public async Task<List<AssetDto>> GetAssetDtos()
        {
            var assets = await _eFRepository.ListAsync<Asset>();
            List<AssetDto> resultDtos = new List<AssetDto>();
            assets.ForEach(asset =>
                {
                    var ruuviData = _repository.FilterBy(s => s.DeviceId == asset.DeviceId).ToList();
                    if (ruuviData.Count != 0)
                    {
                        var assetDto = new AssetDto(asset, ruuviData);

                        resultDtos.Add(assetDto);
                    }
                }

            );

            return resultDtos;
        }

        public async Task<List<SLADto>> GetSlasByAssetId(int id)
        {
            var slaEntities = await _assetSlaRepository.SlaListByAssetAsync(id);

            return slaEntities.Select(c => new SLADto(c)).ToList();
        }

        public async Task<List<BreachDto>> GetBreachesByAssetId(int id)
        {
            var breachesEntities = await _eFRepository.WhereToListAsync<Breach>(a => a.AssetId == id);
            var breachDtos = breachesEntities.OrderByDescending(c => c.CreatedAt).Select(b => new BreachDto(b)).ToList();

            return breachDtos;
        }

        public async Task<List<AssetDto>> GetAssetDtosBySearch(string search)
        {
            var assets = await _eFRepository.WhereToListAsync<Asset>(a => a.Name.ToLower().Contains(search.ToLower()));
            List<AssetDto> resultDtos = new List<AssetDto>();
            assets.ForEach(asset =>
                {
                    var ruuviData = _repository.FilterBy(s => s.DeviceId == asset.DeviceId).ToList();
                    if (ruuviData.Count != 0)
                    {
                        var assetDto = new AssetDto(asset, ruuviData);

                        resultDtos.Add(assetDto);
                    }
                }

            );

            return resultDtos;
        }
    }

}
