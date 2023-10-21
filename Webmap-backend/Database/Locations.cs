using System.ComponentModel.DataAnnotations;

namespace Webmap.Database
{
    public class Locations
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }

        public string Notes { get; set; }
        [Required]
        public double LAT {  get; set; }

        [Required]
        public double LNG { get; set; }

    }
}
