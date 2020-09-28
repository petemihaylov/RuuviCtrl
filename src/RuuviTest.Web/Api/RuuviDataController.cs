using Microsoft.AspNetCore.Mvc;
using RuuviTest.Core.Entities;
using RuuviTest.SharedKernel.Interfaces;
using RuuviTest.Web.ApiModels;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using RuuviTest.Core.ValueObjects;
using RuuviTest.Web.Hubs;
using RuuviTest.Web.Hubs.Interfaces;

namespace RuuviTest.Web.Api
{
    public class RuuviDataController : BaseApiController
    {
        private readonly IMongoRepository<RuuviData> _repository;
        private IHubContext<LiveAssetHub, ILiveAssetHub> _hubContext;

        public RuuviDataController(IMongoRepository<RuuviData> repository)
        {
            _repository = repository;
        }

        // GET: api/RuuviData
        [HttpGet]
        public async Task<IActionResult> List()
        {
            var items = _repository.FilterBy(_ => true);
            return Ok(items);
        }

        [HttpPost]
        public async Task<IActionResult> Uplink(RuuviInput input)
        {
            if (input.tags.Count > 0)
            {
                var structuredInput = RuuviInput.ToRuuviData(input);
                await _repository.InsertOneAsync(structuredInput);
                LiveRuuviOutput output = new LiveRuuviOutput();
                output.Temperature = new SingleStat { Value = structuredInput.Temperature, Time = structuredInput.Time };
                output.BatteryLevel = new SingleStat { Value = structuredInput.BatteryLevel, Time = structuredInput.Time };
                output.Humidity = new SingleStat { Value = structuredInput.Humidity, Time = structuredInput.Time };
                output.Pressure = new SingleStat { Value = structuredInput.Pressure, Time = structuredInput.Time };
                output.Route = new LocationStat {Latitude = structuredInput.Latitude, Longitude = structuredInput.Longitude, Time = structuredInput.Time};
                await _hubContext.Clients.All.GetNewAssetData(output);
            }
            return Ok();
        }
    }
}
