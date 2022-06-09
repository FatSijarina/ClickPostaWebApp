using System;
using System.Collections.Generic;

namespace ClickPostaAPI.Models
{
    public partial class Pushimi
    {
        public int PushimiId { get; set; }
        public string DataFilimit { get; set; } = null!;
        public string DataMbarimit { get; set; } = null!;
        public int? UserId { get; set; }

        public virtual Useri? User { get; set; }
    }
}
