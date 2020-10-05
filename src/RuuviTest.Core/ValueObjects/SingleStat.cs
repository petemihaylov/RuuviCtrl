using System;
using System.Collections.Generic;
using System.Text;

namespace RuuviTest.Core.ValueObjects
{
    public struct SingleStat
    {
        public float Value { get; set; }
        public DateTime Time { get; set; }
    }
}
