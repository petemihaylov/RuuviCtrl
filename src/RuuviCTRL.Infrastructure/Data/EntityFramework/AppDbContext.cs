using Ardalis.EFCore.Extensions;
using Microsoft.EntityFrameworkCore;
using RuuviCTRL.Core.Entities;

namespace RuuviCTRL.Infrastructure.Data.EntityFramework
{
    public class AppDbContext : DbContext
    {
       
        public AppDbContext(DbContextOptions<AppDbContext> opt): base(opt) 
        { }
        public DbSet<Asset> Assets { get; set; }
        public DbSet<Notification> Notifications { get; set; }


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