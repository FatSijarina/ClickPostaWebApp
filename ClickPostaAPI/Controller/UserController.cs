using ClickPostaAPI.Data;
using ClickPostaAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClickPostaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly ClickPostaDBContext _context;

        public UserController(ClickPostaDBContext context)
        {
            _context = context;
        }

        [HttpGet("GetKlientet")]
        public async Task<ActionResult<List<Useri>>> GetKlientet()
        {
            return Ok(await _context.Useri.Where(u => u.RoleId == 1).ToListAsync());
        }
        [HttpGet("GetAdmins")]
        public async Task<ActionResult<List<Useri>>> GetAdmins()
        {
            return Ok(await _context.Useri.Where(u => u.RoleId == 2).ToListAsync());
        }

        [HttpGet("GetTransportuesit")]
        public async Task<ActionResult<List<Useri>>> GetTransportuesit()
        {
            return Ok(await _context.Useri.Where(u => u.RoleId == 3).ToListAsync());
        }

        [HttpPost("AddUsers")]
        public async Task<ActionResult<List<Useri>>> AddUsers(Useri useri)
        {
            Useri user = await _context.Useri.FirstOrDefaultAsync(u => u.UserId == useri.UserId);
            if (user != null)
                return BadRequest("Ky User ekziston!");

            useri.Password = BCrypt.Net.BCrypt.HashPassword(useri.Password);
            _context.Useri.Add(useri);

            await _context.SaveChangesAsync();

            return Ok(await _context.Useri.ToListAsync());
        }

        [HttpPut("UpdateUser")]
        public async Task<ActionResult<List<Useri>>> UpdateUser(Useri useri)
        {
            Useri dbUser = await _context.Useri.FindAsync(useri.UserId);
            if (dbUser == null)
                return BadRequest("User not found!");

            if (!useri.Emri.Trim().Equals(""))
                dbUser.Emri = useri.Emri;
            if (!useri.Mbiemri.Trim().Equals(""))
                dbUser.Mbiemri = useri.Mbiemri;
            if (!useri.Email.Trim().Equals(""))
                dbUser.Email = useri.Email;
            if (!useri.Password.Trim().Equals(""))
                dbUser.Password = BCrypt.Net.BCrypt.HashPassword(useri.Password);
            if (!useri.NrTelefonit.Trim().Equals(""))
                dbUser.NrTelefonit = useri.NrTelefonit;
            if (!(useri.HomeNumber <= 0))
                dbUser.HomeNumber = useri.HomeNumber;
            if (!useri.StreetName.Trim().Equals(""))
                dbUser.StreetName = useri.StreetName;
            if (!(useri.ZipCode <= 0))
                dbUser.ZipCode = useri.ZipCode;
            if (!useri.AddressDetails.Equals(""))
                dbUser.AddressDetails = useri.AddressDetails;
            if (!(useri.RoleId <= 0))
                dbUser.RoleId = useri.RoleId;
            if (!useri.Orari.Equals(""))
                dbUser.Orari = useri.Orari;
            if (!(useri.DitetEpushimit <= 0))
                dbUser.DitetEpushimit = useri.DitetEpushimit;
            if (!(useri.NrPorosive <= 0))
                dbUser.NrPorosive = useri.NrPorosive;

            await _context.SaveChangesAsync();

            return Ok(await _context.Useri.ToListAsync());
        }

        [HttpDelete("DeleteUser")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            Useri dbUser = await _context.Useri.FindAsync(id);
            if (dbUser == null)
                return BadRequest("User not found!");

            _context.Useri.Remove(dbUser);
            await _context.SaveChangesAsync();

            return Ok("User deleted succesfully");
        }

        

    }
}
