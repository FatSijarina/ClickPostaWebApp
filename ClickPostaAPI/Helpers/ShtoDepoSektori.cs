using ClickPostaAPI.Models;
using Microsoft.AspNetCore.Http;

namespace ClickPostaAPI.Helpers
{
    public class ShtoDepoSektori
    {
        private readonly DbContext _context;
        private int depoId { get; set; }
        private int sektoriId { get; set; }

        public ShtoDepoSektori(DbContext context, int depoId, int sektoriId)
        {
            _context = context;
            this.depoId=depoId;
            this.sektoriId=sektoriId;
        }

        public DepoSektori addDepoSektori()
        {
            DepoSektori ds = new DepoSektori();
            ds.DepoId = depoId;
            ds.SektoriId = sektoriId;

            return ds;
        }
    }
}
