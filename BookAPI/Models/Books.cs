using System.ComponentModel.DataAnnotations;

namespace BookAPI.Models
{
    public class Books
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string Note { get; set; }
    }
}
