using RuuviCTRL.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RuuviCTRL.Core.Services.Interfaces
{
    public interface IRuuviDataService
    {
        Task<int> GetAssetId(string deviceId);
        Task<List<Notification>> AddMeasurePoint(RuuviData input);
    }
}
