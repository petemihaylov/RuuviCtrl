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
            var asset = await _eFRepository.GetByIdAsync<Asset>(id);
            if (asset == null)
                return null;

            var ruuviData = _repository.FilterBy(s => s.DeviceId == asset.DeviceId).ToList();
            if (ruuviData.Count == 0)
                return null;

            var assetDto = new AssetDto
            {
                Id = asset.Id,
                DeviceId = asset.DeviceId,
                Name = asset.Name,
                Temperature = ruuviData.Select(c => new SingleStat {Value = c.Temperature, Time = c.Time}).ToArray(),
                BatteryLevel = ruuviData.Select(c => new SingleStat {Value = c.BatteryLevel, Time = c.Time}).ToArray(),
                Humidity = ruuviData.Select(c => new SingleStat {Value = c.Humidity, Time = c.Time}).ToArray(),
                Pressure = ruuviData.Select(c => new SingleStat {Value = c.Pressure, Time = c.Time}).ToArray(),
                Route = ruuviData.Select(c => new LocationStat
                    {Latitude = c.Latitude, Longitude = c.Longitude, Time = c.Time}).ToArray()
            };

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
                        var assetDto = new AssetDto
                        {
                            Id = asset.Id,
                            DeviceId = asset.DeviceId,
                            Name = asset.Name,
                            Temperature = new[]
                                {ruuviData.Select(c => new SingleStat {Value = c.Temperature, Time = c.Time}).Last()},
                            BatteryLevel = new[]
                                {ruuviData.Select(c => new SingleStat {Value = c.BatteryLevel, Time = c.Time}).Last()},
                            Humidity = new[]
                                {ruuviData.Select(c => new SingleStat {Value = c.Humidity, Time = c.Time}).Last()},
                            Pressure = new[]
                                {ruuviData.Select(c => new SingleStat {Value = c.Pressure, Time = c.Time}).Last()},
                            Route = new[]
                            {
                                ruuviData.Select(c => new LocationStat
                                    {Latitude = c.Latitude, Longitude = c.Longitude, Time = c.Time}).Last()
                            }
                        };

                        resultDtos.Add(assetDto);
                    }
                }

            );

            return resultDtos;
        }

        public async Task<List<SLADto>> GetSlasByAssetId(int id)
        {
            var slaEntities = await _eFRepository.WhereToListAsync<SLAAgreement>(a => a.AssetId == id);
            var slaDtos = slaEntities.Select(s => new SLADto
            {
                Id = s.Id,
                MaxTemprature = s.MaxTemprature,
                MinTemprature = s.MinTemprature,
                TempratureCount = s.TempratureCount,
                TempratureTime = s.TempratureTime,
                MaxHumidity = s.MaxHumidity,
                MinHumidity = s.MinHumidity,
                HumidityCount = s.HumidityCount,
                HumidityTime = s.HumidityTime,
                MaxPressure = s.MaxPressure,
                MinPressure = s.MinPressure,
                PressureCount = s.PressureCount,
                PressureTime = s.PressureTime,
                LocationBoundary = s.LocationBoundary,
                LocationCount = s.LocationCount,
                LocationTime = s.LocationTime,
                AssetId = s.AssetId,
                CreatedAt = s.CreatedAt
            }).ToList();

            return slaDtos;
        }

        public async Task<List<BreachDto>> GetBreachesByAssetId(int id)
        {
            var breachesEntities = await _eFRepository.WhereToListAsync<Breach>(a => a.AssetId == id);
            var breachDtos = breachesEntities.Select(s => new BreachDto()
            {
                MaxTemprature = s.MaxTemprature,
                MinTemprature = s.MinTemprature,
                TempratureCount = s.TempratureCount,
                TempratureTime = s.TempratureTime,
                MaxHumidity = s.MaxHumidity,
                MinHumidity = s.MinHumidity,
                HumidityCount = s.HumidityCount,
                HumidityTime = s.HumidityTime,
                MaxPressure = s.MaxPressure,
                MinPressure = s.MinPressure,
                PressureCount = s.PressureCount,
                PressureTime = s.PressureTime,
                LocationBoundary = s.LocationBoundary,
                LocationCount = s.LocationCount,
                LocationTime = s.LocationTime,
                AssetId = s.AssetId,
                SlaAgreementId = s.SlaAgreementId,
                CreatedAt = s.CreatedAt,
                EndDate = s.EndDate,
                Temperature = s.Temperature,
                Humidity = s.Humidity,
                Pressure = s.Pressure,
                Latitude = s.Latitude,
                Longitude = s.Longitude,
                HasTempratureBreach = s.HasTempratureBreach,
                HasHumidityBreach = s.HasHumidityBreach,
                HasPressureBreach = s.HasPressureBreach,
                HasEnded = s.HasEnded
            }).ToList();

            return breachDtos;
        }
    }

}
