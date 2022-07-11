using ClickPostaAPI.Data;
using ClickPostaAPI.Models;
using ClickPostaAPI.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace ClickPostaAPI.Controllers
{

    [Route("Porosia")]
    [ApiController]
    public class PorosiaController : ControllerBase
    {
        private readonly ClickPostaDBContext _context;

        public PorosiaController(ClickPostaDBContext context)
        {
            _context = context;
        }

        [HttpGet("GetAllPorosite")]
        public async Task<ActionResult<List<Porosia>>> GetAllPorosite()
        {
            List<Porosia> Porosite = await _context.Porosia.ToListAsync();
            if (Porosite == null)
                return NoContent();
            return Ok(Porosite);

        }

        [HttpGet("GetUserPorosite")]
        public async Task<ActionResult<List<Porosia>>> GetUserPorosite(int id)
        {
            List<Porosia> Porosite = await _context.Porosia.Where(u => u.UserId == id).ToListAsync();
            if (Porosite == null)
                return NoContent();
            return Ok(Porosite);
        }

        [HttpGet("GetLatestUserPorosia")]
        public async Task<ActionResult<Porosia>> GetLatestUserPorosia(int id)
        {
            Porosia PorosiaFundit = await _context.Porosia.Where(u => u.UserId == id).OrderByDescending(u => u.Id).FirstOrDefaultAsync();
            if (PorosiaFundit == null)
                return NoContent();

            return Ok(PorosiaFundit);
        }

        [HttpGet("GetPorosiaById")]
        public async Task<ActionResult<Porosia>> GetPorosiaById(int id)
        {
            Porosia PorosiaFundit = await _context.Porosia.FindAsync(id);
            if (PorosiaFundit == null)
                return NoContent();

            return Ok(PorosiaFundit);
        }

        [HttpGet("GetMarresiPorosite")]
        public async Task<ActionResult<List<Porosia>>> GetMarresiPorosite(int id)
        {
            List<Porosia> Porosite = await _context.Porosia.Where(u => u.MarresiId == id).ToListAsync();
            if (Porosite == null)
                return NoContent();
            return Ok(Porosite);
        }

        [HttpGet("GetDerguesPorosite")]
        public async Task<ActionResult<List<Porosia>>> GetDerguesiPorosite(int id)
        {
            List<Porosia> Porosite = await _context.Porosia.Where(u => u.DerguesiId == id).ToListAsync();
            if (Porosite == null)
                return NoContent();
            return Ok(Porosite);
        }

        [HttpGet("GetDepoPorosite")]
        public async Task<ActionResult<List<Porosia>>> GetDepoPorosite(int id)
        {
            List<Porosia> Porosite = await _context.Porosia.Where(u => u.DepoSektoriId == id).ToListAsync();
            if (Porosite == null)
                return NoContent();
            return Ok(Porosite);
        }


        [HttpPost("ShtoPorosi")]
        public async Task<ActionResult<List<Useri>>> AddPorosi(Porosia porosia)
        {
            CaktimiPorosise caktimiPorosise = new(_context, porosia.ReceiverZipCode, porosia.Vellimi, porosia.Materiali);

            _context.Porosia.Add(porosia);
            porosia.StatusiPorosiseId = 1;
            porosia.DepoSektoriId = await caktimiPorosise.FiltroDepoSektori();

            int? MarresiCaktuar = await caktimiPorosise.FiltroTransportuesit(porosia.SenderZipCode);
            int? DerguesiCaktuar = await caktimiPorosise.FiltroTransportuesit(porosia.ReceiverZipCode);

            if (MarresiCaktuar != 0)
            {
                porosia.MarresiId = MarresiCaktuar;
                if (porosia.SenderZipCode == porosia.ReceiverZipCode)
                    porosia.DerguesiId = MarresiCaktuar;
            }
            if (DerguesiCaktuar != 0 || DerguesiCaktuar == null)
                porosia.DerguesiId = DerguesiCaktuar;

            await _context.SaveChangesAsync();

            return Ok("Porosia u krye me sukses!");
        }

        [HttpPut("UpdatePorosi")]
        public async Task<ActionResult<List<Useri>>> UpdatePorosi(Porosia request)
        {
            var dbPorosia = await _context.Porosia.FindAsync(request.Id);
            if (dbPorosia == null)
                return BadRequest("Porosia nuk u gjet!");

            //Klienti qe ben porosine
            if (request.UserId != 0)
                dbPorosia.UserId = request.UserId;
            //Detajet e porosise
            if (!request.Emertimi.Equals(""))
                dbPorosia.Emertimi = request.Emertimi;
            if (!request.Detajet.Equals(""))
                dbPorosia.Detajet = request.Detajet;
            if (request.Vellimi != 0)
                dbPorosia.Vellimi = request.Vellimi;
            if (!request.Materiali.Equals(""))
                dbPorosia.Materiali = request.Materiali;
            //Detajet e derguesit/marresit
            if (!request.SenderEmri.Equals(""))
                dbPorosia.SenderEmri = request.SenderEmri;
            if (!request.SenderMbiemri.Equals(""))
                dbPorosia.SenderMbiemri = request.SenderMbiemri;
            if (!request.SenderNrTelefonit.Equals(""))
                dbPorosia.SenderNrTelefonit = request.SenderNrTelefonit;
            if (request.SenderHomeNumber != 0)
                dbPorosia.SenderHomeNumber = request.SenderHomeNumber;
            if (!request.SenderStreetName.Equals(""))
                dbPorosia.SenderStreetName = request.SenderStreetName;
            if (request.SenderZipCode != 0)
                dbPorosia.SenderZipCode = request.SenderZipCode;
            if (!request.SenderAddressDetails.Equals(""))
                dbPorosia.SenderAddressDetails = request.SenderAddressDetails;
            if (!request.ReceiverEmri.Equals(""))
                dbPorosia.ReceiverEmri = request.ReceiverEmri;
            if (!request.ReceiverMbiemri.Equals(""))
                dbPorosia.ReceiverMbiemri = request.ReceiverMbiemri;
            if (!request.ReceiverNrTelefonit.Equals(""))
                dbPorosia.ReceiverNrTelefonit = request.ReceiverNrTelefonit;
            if (request.ReceiverHomeNumber != 0)
                dbPorosia.ReceiverHomeNumber = request.ReceiverHomeNumber;
            if (!request.ReceiverStreetName.Equals(""))
                dbPorosia.ReceiverStreetName = request.ReceiverStreetName;
            if (request.ReceiverZipCode != 0)
                dbPorosia.ReceiverZipCode = request.ReceiverZipCode;
            if (!request.ReceiverAddressDetails.Equals(""))
                dbPorosia.ReceiverAddressDetails = request.ReceiverAddressDetails;
            //detajet e transportuesve dhe depos
            if (request.MarresiId != 0)
                dbPorosia.MarresiId = request.MarresiId;
            if (request.DepoSektoriId != 0)
                dbPorosia.DepoSektoriId = request.DepoSektoriId;
            if (request.DerguesiId != 0)
                dbPorosia.DerguesiId = request.DerguesiId;

            if (request.StatusiPorosiseId != 0)
                dbPorosia.StatusiPorosiseId = request.StatusiPorosiseId;

            await _context.SaveChangesAsync();

            return Ok(await _context.Porosia.ToListAsync());
        }

        [HttpDelete("FshijPorosi")]
        public async Task<ActionResult<List<Porosia>>> FshijPorosine(int id)
        {
            var dbPorosia = await _context.Porosia.FindAsync(id);
            if (dbPorosia == null)
                return BadRequest("Porosia nuk u gjet");
            _context.Porosia.Remove(dbPorosia);
            await _context.SaveChangesAsync();

            return Ok(await _context.Porosia.ToListAsync());
        }

    }
}