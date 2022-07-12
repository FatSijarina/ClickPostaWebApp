using ClickPostaAPI.Data;
using ClickPostaAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace ClickPostaAPI.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]

    public class QytetiController : ControllerBase
    {
        private readonly ClickPostaDBContext _context;

        public QytetiController(ClickPostaDBContext context)
        {
            _context = context;
        }


        [HttpGet("Get Qytetet")]
        public async Task<ActionResult<List<Qyteti>>> Get()
        {
            return Ok(await _context.Qyteti.ToListAsync());
        }

        [HttpGet("ZipCode")]
        public async Task<ActionResult<Qyteti>> Get(int qytetiZipCode)
        {
            var qyteti = await _context.Qyteti.FindAsync(qytetiZipCode);
            if (qyteti == null)
                return BadRequest("Qyteti me zip code: " + qytetiZipCode + " nuk u gjet!");
            return Ok(qyteti);
        }


        [HttpPost("Add Qyteti")]
        public async Task<ActionResult<List<Qyteti>>> AddQyteti(Qyteti qyteti)
        {
            _context.Qyteti.Add(qyteti);
            await _context.SaveChangesAsync();

            return Ok(await _context.Qyteti.ToListAsync());
        }


        [HttpDelete("Fshij Qytetin")]

        public async Task<ActionResult> FshijQytetin(int id)
        {
            var qyteti = await _context.Qyteti.FindAsync(id);
            if (qyteti == null)
                return BadRequest("Qyteti nuk u gjet");

            _context.Qyteti.Remove(qyteti);
            await _context.SaveChangesAsync();

            return Ok("Qyteti u fshi me sukses!");
        }

        [HttpPut("Update Qyteti")]
        public async Task<ActionResult<Qyteti>> UpdateQyteti(Qyteti request)
        {
            var qyteti = await _context.Qyteti.FindAsync(request.QytetiZipCode);
            if (qyteti == null)
                return BadRequest("Qyteti nuk u gjet!");

            qyteti.EmriQytetit = request.EmriQytetit;
            await _context.SaveChangesAsync();

            return Ok(await _context.Qyteti.ToListAsync());
        }


    }

}