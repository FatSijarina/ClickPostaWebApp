using System.ComponentModel.DataAnnotations;

namespace ClickPostaAPI.DTOs
{
    public class RegisterDTO
    {
        [Required]
        public string Emri { get; set; }
        public string Mbiemri { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$", ErrorMessage = "Password must be complex")]
        public string Password { get; set; }
        public string NrTelefonit { get; set; }
        public string StreetName { get; set; }
        public int? HomeNumber { get; set; }
        public int? ZipCode { get; set; }

    }
}
