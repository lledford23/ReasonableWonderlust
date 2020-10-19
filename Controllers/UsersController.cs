using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReasonableWonderlust.Models;

namespace ReasonableWonderlust.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private readonly DatabaseContext _context;

        public UsersController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpPut("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PutUser(int id, User User)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != User.Id)
            {
                return BadRequest();
            }
            if (id != GetCurrentUserId())
            {
                return BadRequest();
            }
            // Tell the database to consider everything in User to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from User
            _context.Entry(User).State = EntityState.Modified;
            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!UserExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }
            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the updated data.
            //
            return Ok(User);
        }
        // Private helper method that looks up an existing User by the supplied id
        private bool UserExists(int id)
        {
            return _context.Users.Any(User => User.Id == id);
        }
        // Private helper method to get the JWT claim related to the user ID
        private int GetCurrentUserId()
        {
            // Get the User Id from the claim and then parse it as an integer.
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }

        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            try
            {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetUser", new { id = user.Id }, user);
            }
            catch (Microsoft.EntityFrameworkCore.DbUpdateException)
            {
                var response = new
                {
                    status = 400,
                    errors = new List<string>() { "This account already exists!" }
                };


                return BadRequest(response);
            }
        }
    }
}
