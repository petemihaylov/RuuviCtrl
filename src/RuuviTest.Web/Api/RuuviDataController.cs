using Microsoft.AspNetCore.Mvc;
using RuuviTest.Core.Entities;
using RuuviTest.SharedKernel.Interfaces;
using RuuviTest.Web.ApiModels;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using RuuviTest.Core.ValueObjects;
using RuuviTest.Web.Hubs;

namespace RuuviTest.Web.Api
{
    public class RuuviDataController : BaseApiController
    {
        private readonly IMongoRepository<RuuviData> _repository;
        private readonly IHubContext<LiveAssetHub> _hubContext;

        public RuuviDataController(IMongoRepository<RuuviData> repository, IHubContext<LiveAssetHub> hubContext)
        {
            _repository = repository;
            _hubContext = hubContext;
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
            if (input.tags.Count > 0 && input.location != null)
            {
                var structuredInput = RuuviInput.ToRuuviData(input);
                await _repository.InsertOneAsync(structuredInput);
                LiveRuuviOutput output = new LiveRuuviOutput
                {
                    Temperature = new SingleStat {Value = structuredInput.Temperature, Time = structuredInput.Time},
                    BatteryLevel =
                        new SingleStat {Value = structuredInput.BatteryLevel, Time = structuredInput.Time},
                    Humidity = new SingleStat {Value = structuredInput.Humidity, Time = structuredInput.Time},
                    Pressure = new SingleStat {Value = structuredInput.Pressure, Time = structuredInput.Time},
                    Route = new LocationStat
                    {
                        Latitude = structuredInput.Latitude,
                        Longitude = structuredInput.Longitude,
                        Time = structuredInput.Time
                    }
                };
                await _hubContext.Clients.All.SendAsync("GetNewAssetData", output);
            }
            return Ok();
        }
    }
}
