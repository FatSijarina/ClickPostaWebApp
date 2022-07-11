using ClickPostaAPI.Data;
using ClickPostaAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ClickPostaAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SektoretController : ControllerBase
    {
        private readonly ClickPostaDBContext _context;

        public SektoretController(ClickPostaDBContext context)
        {
            _context = context;
        }

        [HttpGet("ShowSektori")]
        public async Task<ActionResult<List<Sektori>>> Get()
        {
            return Ok(await _context.Sektori.ToListAsync());
        }

        [HttpPost("AddSektori")]
        public async Task<ActionResult<List<Sektori>>> AddSektori(Sektori sektori)
        {
            _context.Sektori.Add(sektori);
            await _context.SaveChangesAsync();

            return Ok(await _context.Sektori.ToListAsync());
        }

        [HttpPut("UpdateSektori")]
        public async Task<ActionResult<Sektori>> UpdateSektori(Sektori request)
        {
            var dbSektori = await _context.Sektori.FindAsync(request.SektoriId);
            if (dbSektori == null)
                return BadRequest("Sektori not found");

            dbSektori.Emertimi = request.Emertimi;

            await _context.SaveChangesAsync();

            return Ok(await _context.Sektori.ToListAsync());
        }

        [HttpDelete("DeleteSektori")]
        public async Task<ActionResult<List<Sektori>>> DeleteSektori(int id)
        {
            var dbSektori = await _context.Sektori.FindAsync(id);
            if (dbSektori == null)
                return BadRequest("Sektori not found");

            _context.Sektori.Remove(dbSektori);
            await _context.SaveChangesAsync();

            return Ok(await _context.Sektori.ToListAsync());
        }
    }
}
