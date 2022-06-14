using ClickPostaAPI.Data;
using ClickPostaAPI.Models;

namespace ClickPostaAPI.Helpers
{
    public class ValidimiRezervimit
    {
        private readonly ClickPostaDBContext _context;
        private string dataRezervimit { get; set; }
        private string dataKthimit { get; set; }
        private int? userId { get; set; }
        private int? veturaId { get; set; }

        public ValidimiRezervimit(ClickPostaDBContext context, string dataRezervimit, string dataKthimit, int? userId, int? veturaId)
        {
            _context = context;
            this.dataRezervimit = dataRezervimit;
            this.dataKthimit = dataKthimit;
            this.userId = userId;
            this.veturaId = veturaId;
        }

        public async Task<bool> isReserved()
        {
            RezervoVeturen rVeturen = await _context.RezervoVeturen.FirstOrDefaultAsync(a => a.VeturaId == veturaId && a.DataRezervimit == dataRezervimit);

            if (rVeturen == null)
                return false;
            return true;
        }

        public async Task<bool> hasReserved()
        {
            RezervoVeturen useri = await _context.RezervoVeturen.FirstOrDefaultAsync(a => a.UserId == userId && a.DataRezervimit == dataRezervimit);

            if (useri == null)
                return false;
            return true;
        }
    }
}