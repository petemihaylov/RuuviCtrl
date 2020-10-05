using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RuuviTest.Core.Dto;
using RuuviTest.Core.Entities;
using RuuviTest.Core.Services.Interfaces;
using RuuviTest.SharedKernel.Interfaces;

namespace RuuviTest.WebSpa.Api
{
    [Route("api/[controller]")]
    public class AssetsController : Controller
    {
        private readonly IEFRepository _repository;
        private readonly IAssetService _assetService;

        public AssetsController(IEFRepository repository, IAssetService assetService)
        {
            this._repository = repository;
            _assetService = assetService;
        }

        // GET: api/assets
        [HttpGet]
        public async Task<IActionResult> GetAssets()
        {
            var assets = await _repository.ListAsync<Asset>();
            return Ok(assets);
        }

        //GET api/assets/{id}
        [HttpGet("{id}", Name = "GetAssetById")]
        public async Task<ActionResult<AssetDto>> GetAssetById(int id)
        {
            var assetItem = await _assetService.GetAssetDtoById(id);
            if (assetItem != null)
            {

                return Ok(assetItem);
            }
            return NotFound();
        }

        // POST: api/assets
        [HttpPost]
        public async Task<IActionResult> PostAssets([FromBody]Asset asset)
        {
            var assetItem = await _repository.AddAsync(asset);
            return CreatedAtRoute(nameof(GetAssetById), new { id = assetItem.Id }, assetItem);
        }
    }
}