using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReasonableWonderlust.Models;

namespace ReasonableWonderlust.Controllers
{
    // All of these routes will be at the base URL:     /api/ToDoList
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case ToDoListController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoListController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public ToDoListController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/ToDoList
        //
        // Returns a list of all your ToDoLists
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ToDoList>>> GetToDoLists()
        {
            // Uses the database context in `_context` to request all of the ToDoLists, sort
            // them by row id and return them as a JSON array.
            return await _context.ToDoLists.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/ToDoList/5
        //
        // Fetches and returns a specific toDoList by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<ToDoList>> GetToDoList(int id)
        {
            // Find the toDoList in the database using `FindAsync` to look it up by id
            var toDoList = await _context.ToDoLists.FindAsync(id);
            // var toDoList = await _context.ToDoLists.Include(i => i.VacationId).Where(i => i.VacationId == id);
            // If we didn't find anything, we receive a `null` in return
            if (toDoList == null)
            {
                // Return a `404` response to the client indicating we could not find a toDoList with this id
                return NotFound();
            }

            //  Return the toDoList as a JSON object.
            return toDoList;
        }

        // PUT: api/ToDoList/5
        //
        // Update an individual toDoList with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a ToDoList
        // variable named toDoList. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our ToDoList POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDoList(int id, ToDoList toDoList)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != toDoList.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in toDoList to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from toDoList
            _context.Entry(toDoList).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!ToDoListExists(id))
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
            // return Ok(toDoList)
            //
            return NoContent();
        }

        // POST: api/ToDoList
        //
        // Creates a new toDoList in the database.
        //
        // The `body` of the request is parsed and then made available to us as a ToDoList
        // variable named toDoList. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our ToDoList POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<ToDoList>> PostToDoList(ToDoList toDoList)
        {
            // Indicate to the database context we want to add this new record
            _context.ToDoLists.Add(toDoList);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetToDoList", new { id = toDoList.Id }, toDoList);
        }

        // DELETE: api/ToDoList/5
        //
        // Deletes an individual toDoList with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToDoList(int id)
        {
            // Find this toDoList by looking for the specific id
            var toDoList = await _context.ToDoLists.FindAsync(id);
            if (toDoList == null)
            {
                // There wasn't a toDoList with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.ToDoLists.Remove(toDoList);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(toDoList)
            //
            return NoContent();
        }

        // Private helper method that looks up an existing toDoList by the supplied id
        private bool ToDoListExists(int id)
        {
            return _context.ToDoLists.Any(toDoList => toDoList.Id == id);
        }
    }
}
