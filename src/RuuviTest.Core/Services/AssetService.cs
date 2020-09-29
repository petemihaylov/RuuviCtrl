using RuuviTest.Core.Entities;
using RuuviTest.Core.ValueObjects;
using RuuviTest.SharedKernel.Interfaces;
using System.Linq;
using System.Threading.Tasks;

namespace RuuviTest.Core.Services
{
    public class AssetService
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
            try
            {
                Asset result = await _eFRepository.GetByIdAsync<Asset>(id);
                string RuuviId = result.DeviceId;

                var ruuviData = _repository.FilterBy(s => s.DeviceId == RuuviId).SingleOrDefault();

                var output = new AssetDto();
                output.Temperature = new SingleStat() { Value = ruuviData.Temperature, Time = ruuviData.Time };
                output.BatteryLevel = new SingleStat() { Value = ruuviData.BatteryLevel, Time = ruuviData.Time };
                output.Humidity = new SingleStat() { Value = ruuviData.Humidity, Time = ruuviData.Time };
                output.Pressure = new SingleStat() { Value = ruuviData.Pressure, Time = ruuviData.Time };
                output.Route = new LocationStat() { Latitude = ruuviData.Latitude, Longitude = ruuviData.Longitude, Time = ruuviData.Time };

                return output;
            }
            catch (System.Exception)
            {
                throw;
            }
        }

    }
}
