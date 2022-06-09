using System;
using System.Collections.Generic;

namespace ClickPostaAPI.Models
{
    public partial class Qyteti
    {
        public Qyteti()
        {
            Depo = new HashSet<Depo>();
            PorosiaReceiverZipCodeNavigation = new HashSet<Porosia>();
            PorosiaSenderZipCodeNavigation = new HashSet<Porosia>();
            Useri = new HashSet<Useri>();
        }

        public int QytetiZipCode { get; set; }
        public string? EmriQytetit { get; set; }

        public virtual ICollection<Depo> Depo { get; set; }
        public virtual ICollection<Porosia> PorosiaReceiverZipCodeNavigation { get; set; }
        public virtual ICollection<Porosia> PorosiaSenderZipCodeNavigation { get; set; }
        public virtual ICollection<Useri> Useri { get; set; }
    }
}
