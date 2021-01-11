using RuuviCTRL.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RuuviCTRL.Core.Services.Interfaces
{
    public interface IRuuviDataService
    {
        Task<List<Notification>> AddMeasurePoint(RuuviData input);
    }
}
