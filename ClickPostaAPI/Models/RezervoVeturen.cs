using System;
using System.Collections.Generic;

namespace ClickPostaAPI.Models
{
    public partial class RezervoVeturen
    {
        public int RezervimiId { get; set; }
        public string DataRezervimit { get; set; } = null!;
        public string? DataKthimit { get; set; }
        public int? UserId { get; set; }
        public int? VeturaId { get; set; }

        public virtual Useri? User { get; set; }
        public virtual Vetura? Vetura { get; set; }
    }
}
