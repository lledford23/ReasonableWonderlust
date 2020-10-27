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
    // All of these routes will be at the base URL:     /api/Vacations
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case VacationsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class VacationsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public VacationsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Vacations
        //
        // Returns a list of all your Vacations
        //
        [HttpGet]
        // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<IEnumerable<Vacation>>> GetVacations()
        {
            // Uses the database context in `_context` to request all of the Vacations, sort
            // them by row id and return them as a JSON array.
            // return await _context.Vacations.Where(vacation => vacation.UserId == GetCurrentUserId()).OrderBy(row => row.Id).ToListAsync();
            return await _context.Vacations.OrderBy(row => row.Id).ToListAsync();
        }
        // Get: api/Vacations/user/id
        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<Vacation>>> GetVacationByUserId(int userId)
        {
            // Find the vacation in the database using `FindAsync` to look it up by id
            var vacation = await _context.Vacations.Where(vacation => vacation.UserId == userId).ToListAsync();

            // If we didn't find anything, we receive a `null` in return
            if (vacation == null)
            {
                // Return a `404` response to the client indicating we could not find a vacation with this id
                return NotFound();
            }

            //  Return the vacation as a JSON object.
            return vacation;
        }


        // GET: api/Vacations/5
        //
        // Fetches and returns a specific vacation by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Vacation>> GetVacation(int id)
        {
            // Find the vacation in the database using `FindAsync` to look it up by id
            var vacation = await _context.Vacations.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (vacation == null)
            {
                // Return a `404` response to the client indicating we could not find a vacation with this id
                return NotFound();
            }

            //  Return the vacation as a JSON object.
            return vacation;
        }

        // PUT: api/Vacations/5
        //
        // Update an individual vacation with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Vacation
        // variable named vacation. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Vacation POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVacation(int id, Vacation vacation)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != vacation.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in vacation to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from vacation
            _context.Entry(vacation).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!VacationExists(id))
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
            // return Ok(vacation)
            //
            return NoContent();
        }

        // POST: api/Vacations
        //
        // Creates a new vacation in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Vacation
        // variable named vacation. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Vacation POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Vacation>> PostVacation(Vacation vacation)
        {
            // Indicate to the database context we want to add this new record
            _context.Vacations.Add(vacation);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetVacation", new { id = vacation.Id }, vacation);
        }

        // DELETE: api/Vacations/5
        //
        // Deletes an individual vacation with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVacation(int id)
        {
            // Find this vacation by looking for the specific id
            var vacation = await _context.Vacations.FindAsync(id);
            if (vacation == null)
            {
                // There wasn't a vacation with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Vacations.Remove(vacation);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(vacation)
            //
            return NoContent();
        }

        // Private helper method that looks up an existing vacation by the supplied id
        private bool VacationExists(int id)
        {
            return _context.Vacations.Any(vacation => vacation.Id == id);
        }
        private int GetCurrentUserId()
        {
            // Get the User Id from the claim and then parse it as an integer.
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }
    }
}
