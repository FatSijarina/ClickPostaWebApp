﻿using ClickPostaAPI.Data;
using ClickPostaAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClickPostaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RezervoVeturenController : ControllerBase
    {
        private readonly ClickPostaDBContext _context;

        public RezervoVeturenController(ClickPostaDBContext context)
        {
            _context = context;
        }

        [HttpGet("ShowRezervimet")]
        public async Task<ActionResult<List<RezervoVeturen>>> Get()
        {
            return Ok(await _context.RezervoVeturen.ToListAsync());
        }

        [HttpPost("AddRezervoVeturen")]
        public async Task<ActionResult<List<RezervoVeturen>>> AddRezervoVeturen(RezervoVeturen rezervoVeturen)
        {
            _context.RezervoVeturen.Add(rezervoVeturen);
            await _context.SaveChangesAsync();

            return Ok(await _context.RezervoVeturen.ToListAsync());
        }

        [HttpPut("UpdateRezervoVeturen")]
        public async Task<ActionResult> UpdateRezervoVeturen(RezervoVeturen rezervoVeturen)
        {
            var dbRezervoVeturen = await _context.RezervoVeturen.FindAsync(rezervoVeturen.RezervimiId);
            if (dbRezervoVeturen == null)
                return BadRequest("Rezervimi not found");

            if (!(rezervoVeturen.DataRezervimit.Trim().Equals("")))
                dbRezervoVeturen.DataRezervimit = rezervoVeturen.DataRezervimit;
            if (!(rezervoVeturen.DataKthimit.Trim().Equals("")))
                dbRezervoVeturen.DataKthimit = rezervoVeturen.DataKthimit;
            if (!(rezervoVeturen.UserId <= 0))
                dbRezervoVeturen.UserId = rezervoVeturen.UserId;
            if (!(rezervoVeturen.VeturaId <= 0))
                dbRezervoVeturen.VeturaId = rezervoVeturen.VeturaId;

            await _context.SaveChangesAsync();

            return Ok("Rezervimi u perditesua me sukses!");
        }

        [HttpDelete("FshijRezervoVeturen")]
        public async Task<ActionResult> DeleteRezervoVeturen(int id)
        {
            var dbRezervoVeturen = await _context.RezervoVeturen.FindAsync(id);
            if (dbRezervoVeturen == null)
                return BadRequest("Rezervimi i vetures nuk u gjet!");

            _context.RezervoVeturen.Remove(dbRezervoVeturen);
            await _context.SaveChangesAsync();

            return Ok("Rezervimi u fshi me suksese!");
        }
    }
}