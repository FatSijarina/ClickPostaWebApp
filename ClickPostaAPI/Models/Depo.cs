using System;
using System.Collections.Generic;

namespace ClickPostaAPI.Models
{
    public partial class Depo
    {
        public Depo()
        {
            DepoSektori = new HashSet<DepoSektori>();
            Vetura = new HashSet<Vetura>();
        }

        public int DepoId { get; set; }
        public string? Name { get; set; }
        public int? AddressNumber { get; set; }
        public string? StreetName { get; set; }
        public int? ZipCode { get; set; }

        public virtual Qyteti? ZipCodeNavigation { get; set; }
        public virtual ICollection<DepoSektori> DepoSektori { get; set; }
        public virtual ICollection<Vetura> Vetura { get; set; }
    }
}
