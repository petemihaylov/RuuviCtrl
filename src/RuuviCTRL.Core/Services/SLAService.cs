using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RuuviCTRL.Core.Dto;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Services.Interfaces;
using RuuviCTRL.SharedKernel.Interfaces;

namespace RuuviCTRL.Core.Services
{
    public class SLAService : ISLAService
    {
        private readonly IEFRepository _eFRepository;

        public SLAService(IEFRepository eFRepository)
        {
            _eFRepository = eFRepository;
        }

        public async Task<SLADto> GetSLADtoById(int id)
        {
            var slaEntitie = await _eFRepository.GetByIdAsync<SLAAgreement>(id);

            if (slaEntitie == null)
                return null;

            var slaDto = new SLADto(slaEntitie);

            return slaDto;
        }

        public async Task<List<SLADto>> GetSLADtos()
        {
            var slaEntities = await _eFRepository.ListAsync<SLAAgreement>();
            var slaDtos = slaEntities.Select(s => new SLADto(s)).ToList();

            return slaDtos;
        }
    }
}
