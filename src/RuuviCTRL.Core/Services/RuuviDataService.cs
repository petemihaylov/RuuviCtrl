using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Enums;
using RuuviCTRL.Core.Services.Interfaces;
using RuuviCTRL.SharedKernel.Interfaces;

namespace RuuviCTRL.Core.Services
{
    public class RuuviDataService : IRuuviDataService
    {
        private readonly IMongoRepository<RuuviData> _repository;
        private readonly IEFRepository _eFRepository;

        public RuuviDataService(IMongoRepository<RuuviData> repository, IEFRepository eFRepository)
        {
            _repository = repository;
            _eFRepository = eFRepository;
        }
        public async Task AddMeasurePoint(RuuviData input)
        {
            await _repository.InsertOneAsync(input);

            var asset = await _eFRepository.FindAsync<Asset>(i => i.DeviceId == input.DeviceId);
            if (asset != null)
            {
                var slas = await _eFRepository.WhereToListAsync<SLAAgreement>(i => i.AssetId == asset.Id);
                
                if (slas.Count > 0)
                {
                    foreach (var slaAgreement in slas)
                    {
                        var tempratureDateTime = DateTime.Now.Subtract(slaAgreement.TempratureTime);
                        var humidityDateTime = DateTime.Now.Subtract(slaAgreement.HumidityTime);
                        var pressureDateTime = DateTime.Now.Subtract(slaAgreement.PressureTime);
                        var tempratureBreaches = await _eFRepository.CountAsync<Breach>(i => (i.Temperature <= i.MinTemprature || i.Temperature >= i.MaxTemprature) && i.AssetId == asset.Id && i.SlaAgreementId == slaAgreement.Id && i.CreatedAt >= tempratureDateTime);
                        var humidityBreaches = await _eFRepository.CountAsync<Breach>(i => (i.Humidity <= i.MinHumidity || i.Humidity >= i.MaxHumidity) && i.AssetId == asset.Id && i.SlaAgreementId == slaAgreement.Id && i.CreatedAt >= humidityDateTime);
                        var pressureBreaches = await _eFRepository.CountAsync<Breach>(i => (i.Pressure <= i.MinPressure || i.Pressure >= i.MaxPressure) && i.AssetId == asset.Id && i.SlaAgreementId == slaAgreement.Id && i.CreatedAt >= pressureDateTime);

                        var lastBreach = await _eFRepository.LastAsync<Breach, DateTime>(i => i.AssetId == asset.Id && i.SlaAgreementId == slaAgreement.Id, o => o.CreatedAt);

                        var result = slaAgreement.CheckBreach(input, tempratureBreaches, humidityBreaches,
                            pressureBreaches);

                        if (lastBreach != null && lastBreach.HasEnded == false && lastBreach.Type == BreachType.Breach)
                        {
                            if (result == BreachType.Breach) continue;

                            lastBreach.EndBreach();
                            await _eFRepository.UpdateAsync(lastBreach);

                            continue;
                        }

                        if (result != BreachType.None)
                        {
                            var breach = new Breach(asset, input, slaAgreement, result);
                            await _eFRepository.AddAsync(breach);
                        }
                    }
                }
            }
        }
    }
}
