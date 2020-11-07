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
        private readonly IHubContext<LiveAssetHub> _assetHubContext;
        private readonly IHubContext<LiveNotificationHub> _notificationHubContext;
        private readonly IRuuviDataService _ruuviDataService;

        public RuuviDataController(IHubContext<LiveAssetHub> assetHubContext, IHubContext<LiveNotificationHub> notificationHubContext, IRuuviDataService ruuviDataService)
        {
            _assetHubContext = assetHubContext;
            _notificationHubContext = notificationHubContext;
            _ruuviDataService = ruuviDataService;
        }

        [HttpPost]
        public async Task<IActionResult> Uplink(RuuviInput input)
        {
            if (input.tags.Count > 0 && input.location != null)
            {
                var structuredInput = RuuviInput.ToRuuviData(input);
                var notifications = await _ruuviDataService.AddMeasurePoint(structuredInput);

                var liveOutput = RuuviInput.ToLiveRuuviOutput(input);
                await _assetHubContext.Clients.All.SendAsync("GetNewAssetData", liveOutput);

                foreach (var notification in notifications)
                {
                    await _notificationHubContext.Clients.All.SendAsync("GetNewNotification", notification);
                }
            }
            return Ok();
        }
    }
}
