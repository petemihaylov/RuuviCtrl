using Ardalis.EFCore.Extensions;
using Microsoft.EntityFrameworkCore;
using RuuviTest.SharedKernel.Base;
using RuuviTest.SharedKernel.Interfaces;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace RuuviTest.Infrastructure.Data.EntityFramework
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

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