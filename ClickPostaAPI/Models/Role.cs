using System;
using System.Collections.Generic;

namespace ClickPostaAPI.Models
{
    public partial class Role
    {
        public Role()
        {
            Useri = new HashSet<Useri>();
        }

        public int RoleId { get; set; }
        public string? RoleName { get; set; }

        public virtual ICollection<Useri> Useri { get; set; }
    }
}
