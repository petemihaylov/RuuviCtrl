using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RuuviTest.Web.ApiModels;

namespace RuuviTest.Web.Hubs.Interfaces
{
    public interface ILiveAssetHub
    {
        Task GetNewAssetData(LiveRuuviOutput data);
    }
}
