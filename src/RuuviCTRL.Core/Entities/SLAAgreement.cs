using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using RuuviCTRL.SharedKernel.Base;

namespace RuuviCTRL.Core.Entities
{
    public class SLAAgreement : BaseEntity
    {
        public float MaxTemprature { get; set; }
        public float MinTemprature { get; set; }
        public float TempratureCount { get; set; }
        [Column(TypeName = "bigint")]
        public TimeSpan TempratureTime { get; set; }

        public float MaxHumidity { get; set; }
        public float MinHumidity { get; set; }
        public float HumidityCount { get; set; }
        [Column(TypeName = "bigint")]
        public TimeSpan HumidityTime { get; set; }

        public float MinPressure { get; set; }
        public float MaxPressure { get; set; }
        public float PressureCount { get; set; }
        [Column(TypeName = "bigint")]
        public TimeSpan PressureTime { get; set; }

        public string LocationBoundary { get; set; }
        public float LocationCount { get; set; }
        [Column(TypeName = "bigint")]
        public TimeSpan LocationTime { get; set; }

        public int AssetId { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
