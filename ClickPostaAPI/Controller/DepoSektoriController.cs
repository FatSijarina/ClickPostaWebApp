using ClickPostaAPI.Data;
using ClickPostaAPI.Helpers;
using ClickPostaAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClickPostaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepoSektoriController : ControllerBase
    {
        private readonly ClickPostaDBContext _context;

        public DepoSektoriController(ClickPostaDBContext context)
        {
            _context = context;
        }

        [HttpGet("ShowDepoSektori")]
        public async Task<ActionResult<List<DepoSektori>>> Get()
        {
            return Ok(await _context.DepoSektori.ToListAsync());
        }

        [HttpPost("AddDepoSektori")]
        public async Task<ActionResult<List<DepoSektori>>> AddDepoSektori(DepoSektori depoSektori)
        {
            ShtoDepoSektori dS = new ShtoDepoSektori(_context, depoSektori.DepoId, depoSektori.SektoriId);
            /*depoSektori.Depo = await _context.Depo.FindAsync(depoSektori.DepoId);
            depoSektori.Sektori = await _context.Sektori.FindAsync(depoSektori.SektoriId);*/
            _context.DepoSektori.Add(dS.addDepoSektori());
            await _context.SaveChangesAsync();

            return Ok(await _context.DepoSektori.ToListAsync());
        }

        [HttpPut("UpdateDepoSektori")]
        public async Task<ActionResult<DepoSektori>> UpdateDepoSektori(DepoSektori request)
        {
            var dbDepoSektori = await _context.DepoSektori.FindAsync(request.Id);
            if (dbDepoSektori == null)
                return BadRequest("Sektori not found in Depo");

            dbDepoSektori.DepoId = request.DepoId;
            dbDepoSektori.SektoriId = request.SektoriId;

            await _context.SaveChangesAsync();

            return Ok(await _context.DepoSektori.ToListAsync());
        }

        [HttpDelete("DeleteDepoSektori")]
        public async Task<ActionResult<List<DepoSektori>>> DeleteDepoSektori(int id)
        {
            var dbDepoSektori = await _context.DepoSektori.FindAsync(id);
            if (dbDepoSektori == null)
                return BadRequest("Sektori not found in Depo");

            _context.DepoSektori.Remove(dbDepoSektori);
            await _context.SaveChangesAsync();

            return Ok(await _context.DepoSektori.ToListAsync());
        }
    }
}
