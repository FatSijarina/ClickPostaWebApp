using ClickPostaAPI.Data;
using ClickPostaAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClickPostaAPI.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class QytetiController : ControllerBase
    {
        private readonly ClickPostaDBContext _context;

        public QytetiController(ClickPostaDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Qyteti>>> Get()
        {
            return Ok(await _context.Qyteti.ToListAsync());
        }
    }
}
