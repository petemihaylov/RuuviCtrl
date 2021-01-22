using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using RuuviCTRL.Core.Services.Interfaces;
using RuuviCTRL.StorageApi.ApiModels;
using RuuviCTRL.StorageApi.Hubs;
using System.Threading.Tasks;

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

                var assetId = await _ruuviDataService.GetAssetId(input.deviceId);

                var liveOutput = RuuviInput.ToLiveRuuviOutput(input, assetId);
                await _assetHubContext.Clients.All.SendAsync("GetNewAssetData", liveOutput);

                foreach (var notification in notifications)
                {
                    await _notificationHubContext.Clients.All.SendAsync("Notification", notification);
                }
            }
            return Ok();
        }
    }
}
