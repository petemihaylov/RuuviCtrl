using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using RuuviTest.Web.Hubs.Interfaces;

namespace RuuviTest.Web.Hubs
{
    public class LiveAssetHub : Hub<ILiveAssetHub>
    {
    }
}
