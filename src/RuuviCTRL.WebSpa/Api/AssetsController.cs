using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Mvc;
using RuuviCTRL.Core.Dto;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Services.Interfaces;
using RuuviCTRL.SharedKernel.Interfaces;

namespace RuuviCTRL.WebSpa.Api
{
    [ApiController]
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

        [HttpGet("byTime", Name = "GetAssetByTime")]
        public async Task<ActionResult<AssetDto>> GetAssetByTime(int? id, DateTime? start, DateTime? end)
        {
            if (id == null || start == null || end == null)
                return NotFound();

            var assetItem = await _assetService.GetAssetDtoById(id.Value, start.Value, end.Value);
            if (assetItem != null)
            {
                return Ok(assetItem);
            }
            return NotFound();
        }
        //GET api/assets/{id}/breaches
        [HttpGet("{id}/breaches")]
        public async Task<ActionResult<AssetDto>> GetBreachesByAssetId(int id)
        {
            var breachDtos = await _assetService.GetBreachesByAssetId(id);
            if (breachDtos != null)
            {
                return Ok(breachDtos);
            }
            return NotFound();
        }

        //GET api/assets/{id}/slas
        [HttpGet("{id}/slas")]
        public async Task<ActionResult<List<SLADto>>> GetSlasByAssetId(int id)
        {
            var slaDtos = await _assetService.GetSlasByAssetId(id);
            if (slaDtos != null)
            {
                return Ok(slaDtos);
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