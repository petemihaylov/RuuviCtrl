using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RuuviTest.Core.Entities;
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
        [HttpGet]
        public async Task<IActionResult> List()
        {
            var items = _repository.FilterBy(_ => true);
            return Ok(items);
        }
    }
}
