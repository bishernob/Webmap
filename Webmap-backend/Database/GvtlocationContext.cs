using Microsoft.EntityFrameworkCore;
using System.Security.Authentication.ExtendedProtection;

namespace Webmap.Database
{
    public class GvtlocationContext : DbContext 
    {
        public DbSet<Locations> Locations { get; set; }
        public string DbPath { get; }

        private readonly IConfiguration _configuration;
        public GvtlocationContext(IConfiguration configuration)
        {
             _configuration = configuration;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Locations>().HasData(
                     new Locations { ID = 1, Name = "Location 1", Notes = "Sample Note 1", LAT = 40.7128, LNG = -74.0060 },
                     new Locations { ID = 2, Name = "Location 2", Notes = "Sample Note 2", LAT = 34.0522, LNG = -118.2437 },
                     new Locations { ID = 3, Name = "Location 3", Notes = "Sample Note 3", LAT = 51.5074, LNG = -0.1278 },
                     new Locations { ID = 4, Name = "Location 4", Notes = "Sample Note 4", LAT = 35.6895, LNG = 139.6917 },
                     new Locations { ID = 5, Name = "Location 5", Notes = "Sample Note 5", LAT = 41.8781, LNG = -87.6298 },
                     new Locations { ID = 6, Name = "Location 6", Notes = "Sample Note 6", LAT = 37.7749, LNG = -122.4194 },
                     new Locations { ID = 7, Name = "Location 7", Notes = "Sample Note 7", LAT = 19.0760, LNG = 72.8777 },
                     new Locations { ID = 8, Name = "Location 8", Notes = "Sample Note 8", LAT = -33.8688, LNG = 151.2093 },
                     new Locations { ID = 9, Name = "Location 9", Notes = "Sample Note 9", LAT = 55.7558, LNG = 37.6176 },
                     new Locations { ID = 10, Name = "Location 10", Notes = "Sample Note 10", LAT = 40.4168, LNG = -3.7038 }
                );
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
         => options.UseSqlite(_configuration.GetConnectionString("default"));
    }
}
