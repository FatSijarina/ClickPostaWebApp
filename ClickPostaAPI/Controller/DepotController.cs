using ClickPostaAPI.Data;
using ClickPostaAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ClickPostaAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class DepotController : ControllerBase
    {
        private readonly ClickPostaDBContext _context;

        public DepotController(ClickPostaDBContext context)
        {
            _context = context;
        }

        [HttpGet("ShowDepot")]
        public async Task<ActionResult<List<Depo>>> Get()
        {
            return Ok(await _context.Depo.ToListAsync());
        }

        [HttpPost("AddDepo")]
        public async Task<ActionResult<List<Depo>>> AddDepo(Depo depo)
        {
            _context.Depo.Add(depo);
            await _context.SaveChangesAsync();

            return Ok(await _context.Depo.ToListAsync());
        }

        [HttpPut("UpdateDepo")]
        public async Task<ActionResult<List<Depo>>> UpdateDepo(Depo request)
        {
            var dbDepo = await _context.Depo.FindAsync(request.DepoId);
            if (dbDepo == null)
                return BadRequest("Depo not found");

            if (!request.Name.Equals(""))
                dbDepo.Name = request.Name;
            if (request.AddressNumber != 0)
                dbDepo.AddressNumber = request.AddressNumber;
            if (!request.StreetName.Equals(""))
                dbDepo.StreetName = request.StreetName;
            if (request.ZipCode != 0)
                dbDepo.ZipCode = request.ZipCode;

            await _context.SaveChangesAsync();

            return Ok(await _context.Depo.ToListAsync());
        }

        [HttpDelete("DeleteDepo")]
        public async Task<ActionResult<List<Depo>>> DeleteDepo(int id)
        {
            var dbDepo = await _context.Depo.FindAsync(id);
            if (dbDepo == null)
                return BadRequest("Depo not found");

            _context.Depo.Remove(dbDepo);
            await _context.SaveChangesAsync();

            return Ok(await _context.Depo.ToListAsync());
        }
    }
}
