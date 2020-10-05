using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RuuviTest.Core.Entities;
using RuuviTest.Infrastructure.Data.EntityFramework;
using RuuviTest.SharedKernel.Interfaces;

namespace RuuviTest.Web.Controllers
{
    [Route("api/[controller]")]
    public class AssetsController : Controller
    {
        private readonly IEFRepository _repository;

        public AssetsController(IEFRepository repository)
        {
            this._repository = repository;
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
        public async Task<ActionResult<Asset>> GetAssetById(int id)
        {
            var assetItem = await _repository.GetByIdAsync<Asset>(id);
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