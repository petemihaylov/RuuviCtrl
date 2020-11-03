using System;
using System.Collections.Generic;
using System.Text;
using RuuviCTRL.SharedKernel.Base;

namespace RuuviCTRL.Core.Entities
{
    public class Notification : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
