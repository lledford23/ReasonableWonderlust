using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ReasonableWonderlust.Models;
using ReasonableWonderlust.Utils;

namespace ReasonableWonderlust.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SessionsController : ControllerBase
    {
        private readonly DatabaseContext _context;

        readonly protected string JWT_KEY;


        public SessionsController(DatabaseContext context, IConfiguration config)
        {
            _context = context;
            JWT_KEY = config["JWT_KEY"];
        }

        public class LoginUser
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        [HttpPost]
        public async Task<ActionResult> Login(LoginUser loginUser)
        {
            var foundUser = await _context.Users.FirstOrDefaultAsync(user => user.Email == loginUser.Email);

            if (foundUser != null && foundUser.IsValidPassword(loginUser.Password))
            {

                var response = new
                {

                    token = new TokenGenerator(JWT_KEY).TokenFor(foundUser),


                    user = foundUser
                };

                return Ok(response);
            }
            else
            {

                var response = new
                {
                    status = 400,
                    errors = new List<string>() { $"User does not exist" }
                };


                return BadRequest(response);
            }
        }
    }
}