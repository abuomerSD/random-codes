
using Microsoft.EntityFrameworkCore;

namespace RazorPagesMovie.Data; 

public class RazorPagesMovieContext : DbContext {
    public RazorPagesMovieContext(DbContextOptions<RazorPagesMovieContext> options)
    {
    }


    public DbSet<RazorPagesMovie.Models.Movie> Movie { get; set; } = default!;

}