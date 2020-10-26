using System;

namespace RuuviCTRL.SharedKernel.Base
{
    public abstract class BaseDomainEvent
    {
        public DateTime DateOccurred { get; protected set; } = DateTime.UtcNow;
    }
}