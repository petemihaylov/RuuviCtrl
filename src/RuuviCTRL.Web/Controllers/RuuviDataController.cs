using Microsoft.AspNetCore.Mvc;
using RuuviTest.Core.Entities;
using RuuviTest.SharedKernel.Interfaces;
using System.Threading.Tasks;

namespace RuuviTest.Web.Controllers
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
