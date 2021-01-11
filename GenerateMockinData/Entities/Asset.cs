using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenerateMockinData.Entities
{
    public class Asset
    {
        public int? Id { get; set; }
        public string DeviceId { get; set; }
        public string Name { get; set; }

        public override string ToString()
        {
            return Name.ToString() + " - " + DeviceId.ToString();
        }
    }

}
