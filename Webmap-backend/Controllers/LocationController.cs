using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webmap.Database;
using Webmap.ViewModels;

namespace Webmap.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public LocationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public async Task Insert(LocationsVM Input) {
            Console.WriteLine(Input);
            Locations locations = new Locations();
            locations.Notes = Input.Notes;
            locations.LAT = Input.LAT;
            locations.LNG = Input.LNG;
            locations.Name = Input.Name;

            GvtlocationContext DbContext = new GvtlocationContext(_configuration);

            DbContext.Locations.Add(locations);
            await DbContext.SaveChangesAsync();
        }

        [HttpGet]
        public ActionResult<IEnumerable<Locations>> Get()
        {
            GvtlocationContext DbContext = new GvtlocationContext(_configuration);

            // Retrieve all locations from the database
            var locations = DbContext.Locations.ToList();

            return Ok(locations);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, LocationsVM updatedLocation)
        {
            GvtlocationContext DbContext = new GvtlocationContext(_configuration);

            // Find the location in the database by ID
            var location = await DbContext.Locations.FindAsync(id);

            if (location == null)
            {
                // If location not found, return a 404 Not Found response
                return NotFound();
            }

            // Update the location with the new information
            location.Notes = updatedLocation.Notes;
            location.LAT = updatedLocation.LAT;
            location.LNG = updatedLocation.LNG;
            location.Name = updatedLocation.Name;

            // Save changes to the database
            await DbContext.SaveChangesAsync();

            // Return a 204 No Content response
            return NoContent();
        }

    }
}
