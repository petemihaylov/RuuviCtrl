using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RuuviCTRL.Core.Dto;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Services.Interfaces;
using RuuviCTRL.Core.ValueObjects;
using RuuviCTRL.SharedKernel.Interfaces;


namespace RuuviCTRL.Core.Services
{
    public class AssetService : IAssetService
    {
        private readonly IMongoRepository<RuuviData> _repository;
        private readonly IEFRepository _eFRepository;

        public AssetService(IMongoRepository<RuuviData> repository, IEFRepository eFRepository)
        {
            _repository = repository;
            _eFRepository = eFRepository;
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

            var assetDto = new AssetDto(asset, ruuviData);

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
            var slaEntities = await _eFRepository.WhereToListAsync<SLAAgreement>(a => a.AssetId == id);
            var slaDtos = slaEntities.Select(s => new SLADto(s)).ToList();

            return slaDtos;
        }

        public async Task<List<BreachDto>> GetBreachesByAssetId(int id)
        {
            var breachesEntities = await _eFRepository.WhereToListAsync<Breach>(a => a.AssetId == id);
            var breachDtos = breachesEntities.Select(b => new BreachDto(b)).ToList();

            return breachDtos;
        }
    }

}
