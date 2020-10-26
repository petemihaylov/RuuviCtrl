using System;

namespace RuuviCTRL.Core.ValueObjects
{
    public struct SingleStat
    {
        public float Value { get; set; }
        public DateTime Time { get; set; }
    }
}
