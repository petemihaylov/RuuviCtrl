using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using RuuviCTRL.Core.Entities;

namespace RuuviCTRL.Core.Services.Interfaces
{
    public interface IRuuviDataService
    {
        Task AddMeasurePoint(RuuviData input);
    }
}
