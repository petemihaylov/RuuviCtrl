using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.SharedKernel.Interfaces;

namespace RuuviCTRL.StorageApi.Controllers
{
    public class RuuviDataController : Controller
    {
        private readonly IMongoRepository<RuuviData> _repository;

        public RuuviDataController(IMongoRepository<RuuviData> repository)
        {
            _repository = repository;
        }

        // GET: api/RuuviDatas
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var items = _repository.FilterBy(_ => true);
            return View(items);
        }
    }
}
