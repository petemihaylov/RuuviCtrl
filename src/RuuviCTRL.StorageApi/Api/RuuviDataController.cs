using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Services.Interfaces;
using RuuviCTRL.Core.ValueObjects;
using RuuviCTRL.SharedKernel.Interfaces;
using RuuviCTRL.StorageApi.ApiModels;
using RuuviCTRL.StorageApi.Hubs;

namespace RuuviCTRL.StorageApi.Api
{
    public class RuuviDataController : BaseApiController
    {
        private readonly IHubContext<LiveAssetHub> _hubContext;
        private readonly IRuuviDataService _ruuviDataService;

        public RuuviDataController(IHubContext<LiveAssetHub> hubContext, IRuuviDataService ruuviDataService)
        {
            _hubContext = hubContext;
            _ruuviDataService = ruuviDataService;
        }

        [HttpPost]
        public async Task<IActionResult> Uplink(RuuviInput input)
        {
            if (input.tags.Count > 0 && input.location != null)
            {
                var structuredInput = RuuviInput.ToRuuviData(input);
                await _ruuviDataService.AddMeasurePoint(structuredInput);

                var liveOutput = RuuviInput.ToLiveRuuviOutput(input);
                await _hubContext.Clients.All.SendAsync("GetNewAssetData", liveOutput);
            }
            return Ok();
        }
    }
}
