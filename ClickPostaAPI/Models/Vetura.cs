using System;
using System.Collections.Generic;

namespace ClickPostaAPI.Models
{
    public partial class Vetura
    {
        public Vetura()
        {
            RezervoVeturen = new HashSet<RezervoVeturen>();
        }

        public int VeturaId { get; set; }
        public string Brendi { get; set; } = null!;
        public string Modeli { get; set; } = null!;
        public string Targa { get; set; } = null!;
        public string Tipi { get; set; } = null!;
        public decimal? Vellimi { get; set; }
        public int? DepoId { get; set; }

        public virtual Depo? Depo { get; set; }
        public virtual ICollection<RezervoVeturen> RezervoVeturen { get; set; }
    }
}
