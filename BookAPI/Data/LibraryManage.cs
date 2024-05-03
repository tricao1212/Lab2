using BookAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BookAPI.Data
{
    public class LibraryManage : DbContext
    {
        public LibraryManage(DbContextOptions<LibraryManage> options) : base(options)
        {

        }
        public DbSet<Books> Books { get; set; }
    }
}
