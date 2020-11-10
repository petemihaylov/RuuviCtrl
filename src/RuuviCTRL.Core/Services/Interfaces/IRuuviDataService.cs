using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Enums;

namespace RuuviCTRL.Core.Services.Interfaces
{
    public interface IRuuviDataService
    {
        Task<List<Notification>> AddMeasurePoint(RuuviData input);
    }
}
