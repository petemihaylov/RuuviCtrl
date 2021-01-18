using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Enums;
using RuuviCTRL.Core.Interfaces;
using RuuviCTRL.Core.Services.Interfaces;
using RuuviCTRL.SharedKernel.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RuuviCTRL.Core.Services
{
    public class RuuviDataService : IRuuviDataService
    {
        private readonly IMongoRepository<RuuviData> _repository;
        private readonly IEFRepository _eFRepository;
        private readonly IAssetSlaRepository _assetSlaRepository;

        public RuuviDataService(IMongoRepository<RuuviData> repository, IEFRepository eFRepository, IAssetSlaRepository assetSlaRepository)
        {
            _repository = repository;
            _eFRepository = eFRepository;
            _assetSlaRepository = assetSlaRepository;
        }

        public async Task<int> GetAssetId(string deviceId)
        {
            var asset = await _eFRepository.FindAsync<Asset>(i => i.DeviceId == deviceId);
            return asset.Id;
        }

        public async Task<List<Notification>> AddMeasurePoint(RuuviData input)
        {
            var output = new List<Notification>();

            await _repository.InsertOneAsync(input);

            var asset = await _eFRepository.FindAsync<Asset>(i => i.DeviceId == input.DeviceId);
            if (asset != null)
            {
                var slas = await _assetSlaRepository.SlaListByAssetAsync(asset.Id);

                if (slas.Count > 0)
                {
                    foreach (var slaAgreement in slas)
                    {
                        var temperatureDateTime = DateTime.Now.Subtract(slaAgreement.TempratureTime);
                        var humidityDateTime = DateTime.Now.Subtract(slaAgreement.HumidityTime);
                        var pressureDateTime = DateTime.Now.Subtract(slaAgreement.PressureTime);
                        var locationDateTime = DateTime.Now.Subtract(slaAgreement.LocationTime);

                        await EndWarningsThatCausedBreach(i =>
                            !i.HasEnded &&
                            i.Type == BreachType.Warning &&
                            i.AssetId == asset.Id &&
                            i.SlaAgreementId == slaAgreement.Id &&
                            (i.CreatedAt <= temperatureDateTime && i.CreatedAt <= humidityDateTime && i.CreatedAt <= pressureDateTime && i.CreatedAt <= locationDateTime));

                        var temperatureBreaches = await _eFRepository.CountAsync<Breach>(i => !i.HasEnded && (i.Temperature <= i.MinTemprature || i.Temperature >= i.MaxTemprature) && i.AssetId == asset.Id && i.SlaAgreementId == slaAgreement.Id && i.CreatedAt >= temperatureDateTime);
                        var humidityBreaches = await _eFRepository.CountAsync<Breach>(i => !i.HasEnded && (i.Humidity <= i.MinHumidity || i.Humidity >= i.MaxHumidity) && i.AssetId == asset.Id && i.SlaAgreementId == slaAgreement.Id && i.CreatedAt >= humidityDateTime);
                        var pressureBreaches = await _eFRepository.CountAsync<Breach>(i => !i.HasEnded && (i.Pressure <= i.MinPressure || i.Pressure >= i.MaxPressure) && i.AssetId == asset.Id && i.SlaAgreementId == slaAgreement.Id && i.CreatedAt >= pressureDateTime);
                        var locationBreaches = await _eFRepository.CountAsync<Breach>(i => !i.HasEnded && i.HasLocationBreach && i.AssetId == asset.Id && i.SlaAgreementId == slaAgreement.Id && i.CreatedAt >= locationDateTime);

                        var lastBreach = await _eFRepository.LastAsync<Breach, DateTime>(i => i.AssetId == asset.Id && i.SlaAgreementId == slaAgreement.Id, o => o.CreatedAt);

                        var result = slaAgreement.CheckBreach(input, temperatureBreaches, humidityBreaches,
                            pressureBreaches, locationBreaches);

                        if (lastBreach != null && lastBreach.HasEnded == false && lastBreach.Type == BreachType.Breach)
                        {
                            if (result.Item1 == BreachType.None)
                            {
                                lastBreach.EndBreach();
                                await _eFRepository.UpdateAsync(lastBreach);
                            }
                            else
                            {
                                continue;
                            }
                        }

                        if (result.Item1 != BreachType.None)
                        {
                            var breach = new Breach(asset, input, slaAgreement, result.Item1, result.Item2);
                            await _eFRepository.AddAsync(breach);

                            if (breach.Type == BreachType.Breach)
                            {
                                if (breach.HasTempratureBreach)
                                {
                                    await EndWarningsThatCausedBreach(i =>
                                        !i.HasEnded &&
                                        i.Type == BreachType.Warning &&
                                        (i.Temperature <= i.MinTemprature || i.Temperature >= i.MaxTemprature) &&
                                        i.AssetId == asset.Id &&
                                        i.SlaAgreementId == slaAgreement.Id &&
                                        i.CreatedAt >= temperatureDateTime);
                                }
                                if (breach.HasHumidityBreach)
                                {
                                    await EndWarningsThatCausedBreach(i =>
                                        !i.HasEnded &&
                                        i.Type == BreachType.Warning &&
                                        (i.Humidity <= i.MinHumidity || i.Humidity >= i.MaxHumidity) &&
                                        i.AssetId == asset.Id &&
                                        i.SlaAgreementId == slaAgreement.Id &&
                                        i.CreatedAt >= humidityDateTime);
                                }
                                if (breach.HasPressureBreach)
                                {
                                    await EndWarningsThatCausedBreach(i =>
                                        !i.HasEnded &&
                                        i.Type == BreachType.Warning &&
                                        (i.Pressure <= i.MinPressure || i.Pressure >= i.MaxPressure) &&
                                        i.AssetId == asset.Id &&
                                        i.SlaAgreementId == slaAgreement.Id &&
                                        i.CreatedAt >= pressureDateTime);
                                }
                                if (breach.HasLocationBreach)
                                {
                                    await EndWarningsThatCausedBreach(i =>
                                        !i.HasEnded &&
                                        i.Type == BreachType.Warning &&
                                        (i.HasLocationBreach) &&
                                        i.AssetId == asset.Id &&
                                        i.SlaAgreementId == slaAgreement.Id &&
                                        i.CreatedAt >= locationDateTime);
                                }

                                var notification = new Notification($"Sla: {breach.SlaTitle}, has been breached on", asset.Name, "Warning", breach.CreatedAt);
                                var notificationItem = await _eFRepository.AddAsync(notification);

                                output.Add(notificationItem);
                                // SignalR event
                            }
                        }
                    }
                }
            }
            return output;
        }

        private async Task EndWarningsThatCausedBreach(Expression<Func<Breach, bool>> predecate)
        {
            var warnings = await _eFRepository.WhereToListAsync(predecate);
            foreach (var warning in warnings)
            {
                warning.EndBreach();
                await _eFRepository.UpdateAsync(warning);
            }
        }
    }
}
