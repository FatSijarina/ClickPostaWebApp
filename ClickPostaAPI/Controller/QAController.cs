using ClickPostaAPI.Data;
using ClickPostaAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace ClickPostaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class QAControlller : ControllerBase
    {
        private readonly ClickPostaDBContext _context;

        public QAControlller(ClickPostaDBContext context)
        {
            _context = context;
        }


        [HttpGet("Get QA")]
        public async Task<ActionResult<List<QA>>> Get()
        {
            return Ok(await _context.QA.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<QA>> Get(int id)
        {
            var qa = await _context.QA.FindAsync(id);
            if (qa == null)
                return BadRequest("QA me id: " + id + " nuk u gjet!");
            return Ok(qa);
        }


        [HttpPost("Add Question & Answer")]
        public async Task<ActionResult<List<QA>>> AddQA(QA qa)
        {
            _context.QA.Add(qa);
            await _context.SaveChangesAsync();

            return Ok(await _context.QA.ToListAsync());
        }


        [HttpDelete("Fshij QA")]

        public async Task<ActionResult> FshijQA(int id)
        {
            var qa = await _context.QA.FindAsync(id);
            if (qa == null)
                return BadRequest("QA nuk u gjet");

            _context.QA.Remove(qa);
            await _context.SaveChangesAsync();

            return Ok("QA me id: "+ id+ " u fshi me sukses!");
        }

        [HttpPut("Update QA")]
        public async Task<ActionResult<QA>> UpdateQA(QA request)
        {
            var qa = await _context.QA.FindAsync(request.Id);
            if (qa == null)
                return BadRequest("QA nuk u gjet!");

            qa.Question = request.Question;
            qa.Answer = request.Answer;

            await _context.SaveChangesAsync();

            return Ok(await _context.QA.ToListAsync());
        }


    }

}