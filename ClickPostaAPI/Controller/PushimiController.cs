using ClickPostaAPI.Data;
using ClickPostaAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace ClickPostaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class PushimiController : ControllerBase
    {
        private readonly ClickPostaDBContext _context;

        public PushimiController(ClickPostaDBContext context)
        {
            _context = context;
        }


        [HttpGet("Get Pushimet")]
        public async Task<ActionResult<List<Pushimi>>> Get()
        {
            return Ok(await _context.Pushimi.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Pushimi>> Get(int id)
        {
            var pushimi = await _context.Pushimi.FindAsync(id);
            if (pushimi == null)
                return BadRequest("Pushimi me id: " + id + " nuk u gjet!");
            return Ok(pushimi);
        }


        [HttpPost("Rezervo Pushimin")]
        public async Task<ActionResult<List<Pushimi>>> RezervoPushim(Pushimi pushimi)
        {
            _context.Pushimi.Add(pushimi);
            await _context.SaveChangesAsync();

            return Ok(await _context.Pushimi.ToListAsync());
        }


        [HttpDelete("Fshij Pushimin")]

        public async Task<ActionResult> FshijPushimin(int id)
        {
            var pushimi = await _context.Pushimi.FindAsync(id);
            if (pushimi == null)
                return BadRequest("Pushimi nuk u gjet");

            _context.Pushimi.Remove(pushimi);
            await _context.SaveChangesAsync();

            return Ok("Pushimi u fshi me sukses!");
        }

        [HttpPut("Update Pushimi")]
        public async Task<ActionResult<Pushimi>> UpdatePunetori(Pushimi request)
        {
            var pushimi = await _context.Pushimi.FindAsync(request.PushimiId);
            if (pushimi == null)
                return BadRequest("Pushimi nuk u gjet!");

            pushimi.DataFilimit = request.DataFilimit;
            pushimi.DataMbarimit = request.DataMbarimit;
            pushimi.UserId = request.UserId;


            await _context.SaveChangesAsync();

            return Ok(await _context.Pushimi.ToListAsync());
        }


    }

}