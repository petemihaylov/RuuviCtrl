using Microsoft.AspNetCore.Mvc;
using RuuviCTRL.Core.Dto;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Services.Interfaces;
using RuuviCTRL.SharedKernel.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RuuviCTRL.WebSpa.Api
{
    [Route("api/[controller]")]
    public class SLAController : Controller
    {
        private readonly IEFRepository _repository;
        private readonly ISLAService _slaService;

        public SLAController(IEFRepository repository, ISLAService slaService)
        {
            this._repository = repository;
            _slaService = slaService;
        }

        // GET: api/sla
        [HttpGet]
        public async Task<IActionResult> GetSla()
        {
            var slas = await _slaService.GetSLADtos();
            return Ok(slas);
        }

        //GET api/sla/{id}
        [HttpGet("{id}", Name = "GetSLAById")]
        public async Task<ActionResult<SLADto>> GetSLAById(int id)
        {
            var slaItem = await _slaService.GetSLADtoById(id);
            if (slaItem != null)
            {
                return Ok(slaItem);
            }
            return NotFound();
        }

        //GET api/sla/{id}/assets
        [HttpGet("{id}/assets", Name = "GetAssetsFromSLAById")]
        public async Task<ActionResult<List<AssetDto>>> GetAssetsBySlaId(int id)
        {
            var assetDtos = await _slaService.GetAssetsForSla(id);
            if (assetDtos != null)
            {
                return Ok(assetDtos);
            }
            return NotFound();
        }

        // POST: api/slas
        [HttpPost]
        public async Task<IActionResult> PostSLA([FromBody] SLAAgreement sla)
        {
            var slaAgreement = await _repository.AddAsync(sla);
            return CreatedAtRoute(nameof(GetSLAById), new { id = slaAgreement.Id }, slaAgreement);
        }

        // POST: api/slas
        [HttpPut("{id}", Name = "UpdateSLA")]
        public async Task<IActionResult> UpdateSLA(int id, [FromBody] SLAAgreement sla)
        {
            var slaEntity = await _repository.GetByIdAsync<SLAAgreement>(id);
            if (slaEntity == null)
                return BadRequest();

            slaEntity.UpdateSla(sla);

            await _repository.UpdateAsync(slaEntity);
            return Ok(sla);
        }

        // POST: api/slas/{id}/add/{assetId}
        [HttpPost("{id}/add/{assetId}", Name = "AddAssetToSla")]
        public async Task<IActionResult> AddAssetToSla(int id, int assetId)
        {
            var sla = await _slaService.AddAssetToSla(id, assetId);
            return Ok(sla);
        }

        // POST: api/slas/{id}/remove/{assetId}
        [HttpPost("{id}/remove/{assetId}", Name = "RemoveAssetFromSla")]
        public async Task<IActionResult> RemoveAssetFromSla(int id, int assetId)
        {
            await _slaService.RemoveAssetFromSla(id, assetId);
            return Ok();
        }
    }
}
