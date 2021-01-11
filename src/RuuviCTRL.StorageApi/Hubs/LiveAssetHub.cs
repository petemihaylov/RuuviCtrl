using Microsoft.AspNetCore.SignalR;
using RuuviCTRL.StorageApi.ApiModels;
using System.Threading.Tasks;

namespace RuuviCTRL.StorageApi.Hubs
{
    public class LiveAssetHub : Hub
    {
        public Task GetNewAssetData(LiveRuuviOutput data)
        {
            return Clients.All.SendAsync("GetNewAssetData", data);
        }
    }
}
