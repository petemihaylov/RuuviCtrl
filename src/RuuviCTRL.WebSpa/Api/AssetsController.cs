using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RuuviCTRL.Core.Dto;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Services.Interfaces;
using RuuviCTRL.SharedKernel.Interfaces;

namespace RuuviCTRL.WebSpa.Api
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
            var assets = await _assetService.GetAssetDtos();
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

        [HttpGet("{id}/{start}/{end}", Name = "GetAssetByTime")]
        public async Task<ActionResult<AssetDto>> GetAssetByTime(int id,string start, string end)
        {
            DateTime startDate = DateTime.Parse(start);
            DateTime endDate = DateTime.Parse(end);

            if (startDate == null || endDate == null)
                return NotFound();

            var assetItem = await _assetService.GetAssetDtoById(id, startDate, endDate);
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