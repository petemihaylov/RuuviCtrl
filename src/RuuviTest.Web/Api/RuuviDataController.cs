using Microsoft.AspNetCore.Mvc;
using RuuviTest.Core.Entities;
using RuuviTest.SharedKernel.Interfaces;
using RuuviTest.Web.ApiModels;
using System.Threading.Tasks;

namespace RuuviTest.Web.Api
{
    public class RuuviDataController : BaseApiController
    {
        private readonly IMongoRepository<RuuviData> _repository;

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
                await _repository.InsertOneAsync(RuuviInput.ToRuuviData(input));

            }
            return Ok();
        }
    }
}
