using RuuviTest.Core.ValueObjects;
using RuuviTest.SharedKernel.Base;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace RuuviTest.Core.Entities
{
    public class Asset : BaseEntity
    {
        public string DeviceId { get; set; }
        public string Name { get; set; }
    }
}
