using RuuviTest.Core.ValueObjects;
using RuuviTest.SharedKernel.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace RuuviTest.Core.Entities
{
    public class Asset : BaseEntity
    {

        public string DeviceId { get; set; }
        [NotMapped]
        public List<SingleStat> Temperature { get; set; }
        public List<SingleStat> Humidity { get; set; }
        public List<SingleStat> Pressure { get; set; }
        public List<SingleStat> BatteryLevel { get; set; }
    }
}
