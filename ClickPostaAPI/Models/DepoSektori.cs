using System;
using System.Collections.Generic;

namespace ClickPostaAPI.Models
{
    public partial class DepoSektori
    {
        public DepoSektori()
        {
            Porosia = new HashSet<Porosia>();
        }

        public int Id { get; set; }
        public int DepoId { get; set; }
        public int SektoriId { get; set; }

        public virtual Depo Depo { get; set; } = null!;
        public virtual Sektori Sektori { get; set; } = null!;
        public virtual ICollection<Porosia> Porosia { get; set; }
    }
}
