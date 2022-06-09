using System;
using System.Collections.Generic;

namespace ClickPostaAPI.Models
{
    public partial class Sektori
    {
        public Sektori()
        {
            DepoSektori = new HashSet<DepoSektori>();
        }

        public int SektoriId { get; set; }
        public string? Emertimi { get; set; }

        public virtual ICollection<DepoSektori> DepoSektori { get; set; }
    }
}
