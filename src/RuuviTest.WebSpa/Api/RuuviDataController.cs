using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RuuviTest.Core.Entities;
using RuuviTest.Core.ValueObjects;
using RuuviTest.SharedKernel.Interfaces;

namespace RuuviTest.WebSpa.Api
{
    public class RuuviDataController : BaseApiController
    {
        private readonly IMongoRepository<RuuviData> _repository;

        public RuuviDataController(IMongoRepository<RuuviData> repository)
        {
            _repository = repository;
        }

        // GET: api/RuuviData
        //[HttpGet]
        //public async Task<IActionResult> List()
        //{
        //    var items = _repository.FilterBy(_ => true);
        //    return Ok(items);
        //}

        [HttpGet]
        public async Task<IActionResult> List()
        {
            //var items = _repository.FilterBy(c => c.DeviceId == deviceID);
            var items = _repository.FilterBy(_ => true);
            Asset test = new Core.Entities.Asset();
            test.DeviceId = items.Select(c => c.DeviceId).First();
            test.Temperature  = items.Select(c => new SingleStat { Value = c.Temperature, Time = c.Time }).ToList();
            test.BatteryLevel = items.Select(c => new SingleStat { Value = c.BatteryLevel, Time = c.Time }).ToList();
            test.Humidity = items.Select(c => new SingleStat { Value = c.Humidity, Time = c.Time }).ToList();
            test.Pressure = items.Select(c => new SingleStat { Value = c.Pressure, Time = c.Time }).ToList();
            return Ok(test);
        }
    }
}
