using Ardalis.EFCore.Extensions;
using Microsoft.EntityFrameworkCore;
using RuuviTest.Core.Entities;

namespace RuuviTest.Infrastructure.Data.EntityFramework
{
    public class AppDbContext : DbContext
    {
       
        public AppDbContext(DbContextOptions<AppDbContext> opt): base(opt) 
        { }
        public DbSet<AssetDto> Assets { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyAllConfigurationsFromCurrentAssembly();
        }

        public override int SaveChanges()
        {
            return SaveChangesAsync().GetAwaiter().GetResult();
        }
    }
}