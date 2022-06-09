using System;
using System.Collections.Generic;

namespace ClickPostaAPI.Models
{
    public partial class StatusiPorosise
    {
        public StatusiPorosise()
        {
            Porosia = new HashSet<Porosia>();
        }

        public int StatusiPorosiseId { get; set; }
        public string? Statusi { get; set; }

        public virtual ICollection<Porosia> Porosia { get; set; }
    }
}
