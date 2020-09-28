using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using RuuviTest.Web.ApiModels;

namespace RuuviTest.Web.Hubs
{
    public class LiveAssetHub : Hub
    {
        public Task GetNewAssetData(LiveRuuviOutput data)
        {
            return Clients.All.SendAsync("GetNewAssetData", data);
        }
    }
}
