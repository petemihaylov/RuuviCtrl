using Microsoft.AspNetCore.Mvc;
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

        public string Name { get; set; }

        [NotMapped]
        public List<SingleStat> Temperature { get; set; }

        [NotMapped]
        public List<SingleStat> Humidity { get; set; }
        
        [NotMapped]
        public List<SingleStat> Pressure { get; set; }
        
        [NotMapped]
        public List<SingleStat> BatteryLevel { get; set; }
        
        [NotMapped]
        public List<LocationStat> Route { get; set; }
    }
}
