using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace ClickPostaAPI.Models
{
    public partial class Useri : IdentityUser<int>
    {
        public Useri()
        {
            PorosiaDerguesi = new HashSet<Porosia>();
            PorosiaMarresi = new HashSet<Porosia>();
            PorosiaUser = new HashSet<Porosia>();
            Pushimi = new HashSet<Pushimi>();
            RezervoVeturen = new HashSet<RezervoVeturen>();
        }

        public int UserId { get; set; }
        public string Emri { get; set; } = null!;
        public string Mbiemri { get; set; } = null!;
        public string NrTelefonit { get; set; } = null!;
        public int? HomeNumber { get; set; }
        public string? StreetName { get; set; }
        public int? ZipCode { get; set; }
        public string? AddressDetails { get; set; }
        public int? RoleId { get; set; }
        public string? Orari { get; set; }
        public int? DitetEpushimit { get; set; }
        public int? NrPorosive { get; set; }
        public virtual Role? Role { get; set; }
        public virtual Qyteti? ZipCodeNavigation { get; set; }
        public virtual ICollection<Porosia> PorosiaDerguesi { get; set; }
        public virtual ICollection<Porosia> PorosiaMarresi { get; set; }
        public virtual ICollection<Porosia> PorosiaUser { get; set; }
        public virtual ICollection<Pushimi> Pushimi { get; set; }
        public virtual ICollection<RezervoVeturen> RezervoVeturen { get; set; }
    }
}