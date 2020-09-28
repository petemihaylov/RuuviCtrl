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
            Asset output = new Asset();
            var ruuviDatas = _repository.FilterBy(_ => true).ToList();
            output.DeviceId = ruuviDatas.Select(c => c.DeviceId).First();
            output.Temperature  = ruuviDatas.Select(c => new SingleStat { Value = c.Temperature, Time = c.Time }).ToList();
            output.BatteryLevel = ruuviDatas.Select(c => new SingleStat { Value = c.BatteryLevel, Time = c.Time }).ToList();
            output.Humidity = ruuviDatas.Select(c => new SingleStat { Value = c.Humidity, Time = c.Time }).ToList();
            output.Pressure = ruuviDatas.Select(c => new SingleStat { Value = c.Pressure, Time = c.Time }).ToList();
            output.Route = ruuviDatas.Select(c => new LocationStat { Latitude = c.Latitude, Longitude = c.Longitude, Time = c.Time }).ToList();
            return Ok(output);
        }
    }
}
