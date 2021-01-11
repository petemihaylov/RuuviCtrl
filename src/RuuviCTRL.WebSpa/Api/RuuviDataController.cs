using Microsoft.AspNetCore.Mvc;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.SharedKernel.Interfaces;
using System.Linq;
using System.Threading.Tasks;

namespace RuuviCTRL.WebSpa.Api
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
            return Ok(output);
        }
    }
}
