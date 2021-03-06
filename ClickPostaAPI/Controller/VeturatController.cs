using ClickPostaAPI.Data;
using ClickPostaAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClickPostaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VeturatController : ControllerBase
    {
        private readonly ClickPostaDBContext _context;

        public VeturatController(ClickPostaDBContext context)
        {
            _context = context;
        }

        [HttpGet("ShowVeturat")]
        public async Task<ActionResult<List<Vetura>>> Get()
        {
            return Ok(await _context.Vetura.ToListAsync());
        }

        [HttpGet("ShowVeturatOfDepo")]
        public async Task<ActionResult<List<Vetura>>> GetVeturatDepo(int depoId)
        {
            List<Vetura> veturat = await _context.Vetura.Where(v => v.DepoId == depoId).ToListAsync();
            if(veturat == null)
                return BadRequest("Depo me id " + depoId + " nuk ka asnje veture!!");
            return Ok(veturat);
        }

        [HttpPost("AddVetura")]
        public async Task<ActionResult<List<Vetura>>> AddVetura(Vetura vetura)
        {
            var targa = await _context.Vetura.FirstOrDefaultAsync(v => v.Targa == vetura.Targa);
            if (targa != null)
                return BadRequest("Vetura ekziston!");

             _context.Vetura.Add(vetura);
             await _context.SaveChangesAsync();

             return Ok(await _context.Vetura.ToListAsync());
        }

        [HttpPut("UpdateVetura")]
        public async Task<ActionResult<List<Vetura>>> UpdateVetura(Vetura vetura)
        {
            var dbVetura = await _context.Vetura.FindAsync(vetura.VeturaId);
            if (dbVetura == null)
                return BadRequest("Vetura not found");

            if (!vetura.Brendi.Trim().Equals(""))
                dbVetura.Brendi = vetura.Brendi;
            if (!vetura.Modeli.Trim().Equals(""))
                dbVetura.Modeli = vetura.Modeli;
            if (!vetura.Targa.Trim().Equals(""))
                dbVetura.Targa = vetura.Targa;
            if (!vetura.Tipi.Trim().Equals(""))
                dbVetura.Tipi = vetura.Tipi;
            if (!(vetura.Vellimi <= 0))
                dbVetura.Vellimi = vetura.Vellimi;
            if (!(vetura.DepoId <= 0))
                dbVetura.DepoId = vetura.DepoId;

            await _context.SaveChangesAsync();

            return Ok(await _context.Vetura.ToListAsync());
        }

        [HttpDelete("DeleteVetura")]
        public async Task<ActionResult<List<Vetura>>> DeleteVetura(int id)
        {
            var dbVetura = await _context.Vetura.FindAsync(id);
            if (dbVetura == null)
                return BadRequest("Vetura not found");
            
            _context.Vetura.Remove(dbVetura);
            await _context.SaveChangesAsync();

            return Ok(await _context.Vetura.ToListAsync());
        }
    }
}