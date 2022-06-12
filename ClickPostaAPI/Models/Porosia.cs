using System;
using System.Collections.Generic;

namespace ClickPostaAPI.Models
{
    public partial class Porosia
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Emertimi { get; set; } = null!;
        public string Detajet { get; set; } = null!;
        public decimal Vellimi { get; set; }
        public string Materiali { get; set; } = null!;
        public string? SenderEmri { get; set; }
        public string? SenderMbiemri { get; set; }
        public string? SenderNrTelefonit { get; set; }
        public int? SenderHomeNumber { get; set; }
        public string? SenderStreetName { get; set; }
        public int? SenderZipCode { get; set; }
        public string? SenderAddressDetails { get; set; }
        public string ReceiverEmri { get; set; } = null!;
        public string ReceiverMbiemri { get; set; } = null!;
        public string? ReceiverNrTelefonit { get; set; }
        public int? ReceiverHomeNumber { get; set; }
        public string? ReceiverStreetName { get; set; }
        public int? ReceiverZipCode { get; set; }
        public string? ReceiverAddressDetails { get; set; }
        public int? MarresiId { get; set; }
        public int? DepoSektoriId { get; set; }
        public int? DerguesiId { get; set; }
        public int? StatusiPorosiseId { get; set; }

        public virtual DepoSektori? DepoSektori { get; set; }
        public virtual Useri? Derguesi { get; set; }
        public virtual Useri? Marresi { get; set; }
        public virtual Qyteti? ReceiverZipCodeNavigation { get; set; }
        public virtual Qyteti? SenderZipCodeNavigation { get; set; }
        public virtual StatusiPorosise? StatusiPorosise { get; set; }
        public virtual Useri? User { get; set; } = null!;
    }
}
