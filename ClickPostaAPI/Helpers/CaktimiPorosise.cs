using ClickPostaAPI.Data;
using ClickPostaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ClickPostaAPI.Helpers
{
    public class CaktimiPorosise
    {
        private readonly ClickPostaDBContext _context;
        private int? DepoZipCode { get; }
        private decimal VellimiPorosise { get; }
        private string MaterialiPorosise { get; }

        public CaktimiPorosise(ClickPostaDBContext context,
            int? depoZipCode, 
            decimal vellimiPorosise, 
            string materialiPorosise)
        {
            _context = context;
            DepoZipCode = depoZipCode;
            VellimiPorosise = vellimiPorosise;
            MaterialiPorosise = materialiPorosise;

        }

        public string KalkuloVeturenNgaVellimi()
        {
            if (VellimiPorosise < 0.45m)
                return "Scooter";
            if (VellimiPorosise < 2.10m)
                return "Pickup";

            return "Truck";
        }

        public async Task<int> FiltroTransportuesit(int? PorosiaZipCode)
        {
            //merr transportuesit nga qyteti me zipcode te derguar
            List<Useri> MarresitNgaQyteti = await _context.Useri.Where(u => u.RoleId == 3 /*3 eshte roliID i transportuesit ne databaze*/
                                                    && u.ZipCode == PorosiaZipCode)
                                            .ToListAsync();

            DateTime dateTime = DateTime.Now;
            //filtron transportuesit nga lloji i makines qe ka
            foreach (Useri u in MarresitNgaQyteti.ToList())
            {
                /*Nese nuk gjejme ne listen e rezervimeve kete user
                dhe nese ne diten dhe muajin e sotem nuk ka rezervuar veture*/
                var rezervimi = await _context.RezervoVeturen.
                    FromSqlInterpolated($@"SELECT * FROM RezervoVeturen p 
                                        WHERE p.UserID = {u.UserId} 
                                        and Day(datarezervimit) = {dateTime.Day}
                                        and Month(datarezervimit) = {dateTime.Month}")
                    .FirstOrDefaultAsync();

                //nese nuk gjejme rezervim nga ky transportues
                //ose nese transportuesi nuk ka te rezervuar automjetin e duhur e fshijme ate nga lista
                if (rezervimi == null)
                    MarresitNgaQyteti.Remove(u);
                else if (!(await _context.Vetura.FindAsync(rezervimi.VeturaId)).Tipi.Equals(KalkuloVeturenNgaVellimi()))
                    MarresitNgaQyteti.Remove(u);

                rezervimi = null;
            }
            //E gjen marresin qe ka me se paku porosi
            Useri MarresiCaktuar = MarresitNgaQyteti.FirstOrDefault(u => u.NrPorosive == MarresitNgaQyteti.Min(m => m.NrPorosive));
            //int MarresiCaktuar = MarresitNgaQyteti.Where(u => u.NrPorosive == MarresitNgaQyteti.Min(m => m.NrPorosive)).Select(m => m.UserId).FirstOrDefault();
            if (MarresiCaktuar == null)
                return 0;

            _context.Useri.FindAsync(MarresiCaktuar.UserId).Result.NrPorosive++;

            return MarresiCaktuar.UserId;
        }

        public async Task<int> FiltroDepoSektori()
        {
            int DepoNgaQyteti = await _context.Depo.Where(d => d.ZipCode == DepoZipCode).Select(d => d.DepoId).FirstOrDefaultAsync();
            int SektoriNgaTipi = await _context.Sektori.Where(s => s.Emertimi.Equals(MaterialiPorosise)).Select(s => s.SektoriId).FirstOrDefaultAsync();
            int DepoSektoriCaktuar = await _context.DepoSektori.Where(dS => dS.DepoId == DepoNgaQyteti 
                                                                               && dS.SektoriId == SektoriNgaTipi).Select(dS => dS.Id).FirstOrDefaultAsync();
            if (DepoSektoriCaktuar == null)
                return 0;

            return DepoSektoriCaktuar;
        }

    }
}