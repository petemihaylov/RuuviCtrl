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
    public class BreachRepositoryTests
    {
        private readonly DbContextOptions<AppDbContext> _dbContextOptions;
        public BreachRepositoryTests()
        {
            var databaseName = Guid.NewGuid().ToString();

            _dbContextOptions = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName)
                .EnableSensitiveDataLogging()
                .Options;
        }

        [Fact]
        public async Task AddBreachAsync()
        {
            await using (var context = new AppDbContext(_dbContextOptions))
            {
                var breachRepository = new EfRepository(context);

                //Generate random new Breach
                var breach = BreachMock.GenerateRandomBreach(0);

                //Add new Breach
                await breachRepository.AddAsync(breach);

                //Get new Breach
                var newBreach = await context.Breaches.Where(x => x.Id == breach.Id).SingleAsync();

                //Assert new Breach
                newBreach.Should().BeEquivalentTo(breach, options => options.Excluding(o => o.Id));
            }
        }

        [Fact]
        public async Task GetBreachAsync()
        {
            await using (var context = new AppDbContext(_dbContextOptions))
            {
                var breachRepository = new EfRepository(context);
                //Generate random new Breach
                var breach = BreachMock.GenerateRandomBreach(1);

                //Add new Breach
                await breachRepository.AddAsync(breach);

                //Get new Breach
                var newBreach = await breachRepository.GetByIdAsync<Breach>(breach.Id);

                //Assert new channel
                newBreach.Should().BeEquivalentTo(breach, options => options.Excluding(o => o.Id));
            }
        }

        [Fact]
        public async Task DeleteBreachAsync()
        {
            await using (var context = new AppDbContext(_dbContextOptions))
            {
                var breachRepository = new EfRepository(context);

                //Generate random new Breach
                var breach = BreachMock.GenerateRandomBreach(2);

                //Add new Breach
                await breachRepository.AddAsync(breach);

                //Get new Breach
                var newBreach = await context.Breaches.Where(x => x.Id == breach.Id).SingleAsync();

                //Assert new Breach
                newBreach.Should().BeEquivalentTo(breach, options => options.Excluding(o => o.Id));

                ////Delete Breach
                await breachRepository.DeleteAsync(newBreach);

                ////Get deleted Breach
                var deletedBreach = await context.Breaches.Where(x => x.Id == breach.Id).AsNoTracking().SingleOrDefaultAsync();

                //Assert that it does not exist
                deletedBreach.Should().BeNull();
            }
        }

        [Fact]
        public async Task UpdateBreachAsync()
        {
            await using (var context = new AppDbContext(_dbContextOptions))
            {
                var breachRepository = new EfRepository(context);

                //Generate random new Breach
                var breach = BreachMock.GenerateRandomBreach(3);

                //Add new Breach
                await breachRepository.AddAsync(breach);

                //Get new Breach
                var newBreach = await context.Breaches.Where(x => x.Id == breach.Id).SingleAsync();

                //Assert new Breach
                newBreach.Should().BeEquivalentTo(breach, options => options.Excluding(o => o.Id));

                //Detached the added Breach
                context.Entry(newBreach).State = EntityState.Detached;

                //Generete new Breach with added item id
                var updatedBreach = BreachMock.GenerateRandomBreach(newBreach.Id);

                //Update Breach
                await breachRepository.UpdateAsync(updatedBreach);

                //Get updated Breach
                var updatedBreachEntity = await context.Breaches.Where(x => x.Id == updatedBreach.Id).SingleAsync();

                //Assert updated channel
                updatedBreachEntity.Should().BeEquivalentTo(updatedBreach);
            }
        }
    }
}
