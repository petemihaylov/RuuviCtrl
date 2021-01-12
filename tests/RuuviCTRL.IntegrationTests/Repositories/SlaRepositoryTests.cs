using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Infrastructure.Data.EntityFramework;
using RuuviCTRL.IntegrationTests.Mockers;
using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace RuuviCTRL.IntegrationTests.Repositories
{
    public class SlaRepositoryTests
    {
        private readonly DbContextOptions<AppDbContext> _dbContextOptions;
        public SlaRepositoryTests()
        {
            var databaseName = Guid.NewGuid().ToString();

            _dbContextOptions = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName)
                .EnableSensitiveDataLogging()
                .Options;
        }

        [Fact]
        public async Task AddSlaAsync()
        {
            await using (var context = new AppDbContext(_dbContextOptions))
            {
                var slaRepository = new EfRepository(context);

                //Generate random new Sla
                var sla = SlaMock.GenerateRandomSla(0);

                //Add new Sla
                await slaRepository.AddAsync(sla);

                //Get new Sla
                var newSla = await context.SlaAgreements.Where(x => x.Id == sla.Id).SingleAsync();

                //Assert new Sla
                newSla.Should().BeEquivalentTo(sla, options => options.Excluding(o => o.Id));
            }
        }

        [Fact]
        public async Task GetSlaAsync()
        {
            await using (var context = new AppDbContext(_dbContextOptions))
            {
                var slaRepository = new EfRepository(context);
                //Generate random new Sla
                var sla = SlaMock.GenerateRandomSla(1);

                //Add new Sla
                await slaRepository.AddAsync(sla);

                //Get new Sla
                var newSla = await slaRepository.GetByIdAsync<SLAAgreement>(sla.Id);

                //Assert new channel
                newSla.Should().BeEquivalentTo(sla, options => options.Excluding(o => o.Id));
            }
        }

        [Fact]
        public async Task DeleteSlaAsync()
        {
            await using (var context = new AppDbContext(_dbContextOptions))
            {
                var slaRepository = new EfRepository(context);

                //Generate random new Sla
                var sla = SlaMock.GenerateRandomSla(2);

                //Add new Sla
                await slaRepository.AddAsync(sla);

                //Get new Sla
                var newSla = await context.SlaAgreements.Where(x => x.Id == sla.Id).SingleAsync();

                //Assert new Sla
                newSla.Should().BeEquivalentTo(sla, options => options.Excluding(o => o.Id));

                ////Delete Sla
                await slaRepository.DeleteAsync(newSla);

                ////Get deleted Sla
                var deletedSla = await context.SlaAgreements.Where(x => x.Id == sla.Id).AsNoTracking().SingleOrDefaultAsync();

                //Assert that it does not exist
                deletedSla.Should().BeNull();
            }
        }

        [Fact]
        public async Task UpdateSlaAsync()
        {
            await using (var context = new AppDbContext(_dbContextOptions))
            {
                var slaRepository = new EfRepository(context);

                //Generate random new Sla
                var sla = SlaMock.GenerateRandomSla(3);

                //Add new Sla
                await slaRepository.AddAsync(sla);

                //Get new Sla
                var newSla = await context.SlaAgreements.Where(x => x.Id == sla.Id).SingleAsync();

                //Assert new Sla
                newSla.Should().BeEquivalentTo(sla, options => options.Excluding(o => o.Id));

                //Detached the added Sla
                context.Entry(newSla).State = EntityState.Detached;

                //Generete new Sla with added item id
                var updatedSla = SlaMock.GenerateRandomSla(newSla.Id);

                //Update Sla
                await slaRepository.UpdateAsync(updatedSla);

                //Get updated Sla
                var updatedSlaEntity = await context.SlaAgreements.Where(x => x.Id == updatedSla.Id).SingleAsync();

                //Assert updated channel
                updatedSlaEntity.Should().BeEquivalentTo(updatedSla);
            }
        }
    }
}
