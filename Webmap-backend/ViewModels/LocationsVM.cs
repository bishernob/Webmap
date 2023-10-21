using System.ComponentModel.DataAnnotations;

namespace Webmap.ViewModels
{
    public class LocationsVM
    {
        [Required]
        public string Name { get; set; }

        public string Notes { get; set; }
        [Required]
        public double LAT { get; set; }

        [Required]
        public double LNG { get; set; }
    }
}
