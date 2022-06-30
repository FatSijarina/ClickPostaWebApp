using ClickPostaAPI.Data;
using ClickPostaAPI.DTOs;
using ClickPostaAPI.Models;
using ClickPostaAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace ClickPostaAPI.Controller
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        private readonly ClickPostaDBContext _context;
        private readonly UserManager<Useri> _userManager;
        private readonly SignInManager<Useri> _signInManager;
        private readonly TokenServices _tokenServices;
        public AccountController(UserManager<Useri> userManager, 
            SignInManager<Useri> signInManager,
            ClickPostaDBContext context,
            TokenServices tokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _context = context;
            _tokenServices = tokenService;  
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO )
        {
            var user = await _userManager.FindByEmailAsync(loginDTO.Email);
            if (user == null) return Unauthorized();

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDTO.Password, false);

            if(result.Succeeded)
            {
                return Ok(CreateUserObject(user));
            }

            return Unauthorized();
        }

        [HttpPost("Register")]
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDTO)
        {
            if(await _userManager.Users.AnyAsync(x => x.Email == registerDTO.Email))
            {
                return BadRequest("Email i perdorur");
            }

            var user = new Useri
            {
                Emri = registerDTO.Emri,
                Mbiemri = registerDTO.Mbiemri,
                Email = registerDTO.Email,
                NrTelefonit = registerDTO.NrTelefonit,
                HomeNumber = registerDTO.HomeNumber,
                ZipCode = registerDTO.ZipCode,  
                RoleId  = 1,

                UserName = registerDTO.Email
            };

            var result = await _userManager.CreateAsync(user, registerDTO.Password);

            if (result.Succeeded)
            {
                return CreateUserObject(user);
            }

            return BadRequest("Problem registering user!");
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDTO>> GetCurrentUser()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));


            return CreateUserObject(user);
        }

        private UserDTO CreateUserObject(Useri user)
        {
            return new UserDTO
            {
                UserId = user.UserId,
                Emri = user.Emri,
                Token = _tokenServices.CreateToken(user)
            };
        }
        
    }
}
