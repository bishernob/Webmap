using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Webmap.Migrations
{
    /// <inheritdoc />
    public partial class SeedingData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Locations",
                columns: new[] { "ID", "LAT", "LNG", "Name", "Notes" },
                values: new object[,]
                {
                     { 1, 27.92, 38.23, "Location 1", "Parking" },
                     { 2, 24.0, 45.0, "Location 2", "ZOO" },
                     { 3, 24.005, 45.005, "Location 3", "HOSPITAL" },
                     { 4, 35.6895, 39.69, "Location 4", "MALL" },
                     { 5, 41.8781, 87.62, "Location 5", "SUPERMARKET" },
                     { 6, 37.7749, 12.41, "Location 6", "GAS STATION" },
                     { 7, 19.076, 52.87, "Location 7", "PARK" },
                     { 8, 33.86, 15.20, "Location 8", "FOOD COURT" },
                     { 9, 55.75, 37.61, "Location 9", "GALLERY" },
                     { 10, 40.41, 3.70, "Location 10", "Hotel" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "ID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "ID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "ID",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "ID",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "ID",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "ID",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "ID",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "ID",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "ID",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "ID",
                keyValue: 10);
        }
    }
}
