using System;
using System.Collections.Generic;

namespace ClickPostaAPI.Models
{
    public partial class QA
    {
        public int Id { get; set; }
        public string? Question { get; set; }
        public string? Answer { get; set; }
    }
}
