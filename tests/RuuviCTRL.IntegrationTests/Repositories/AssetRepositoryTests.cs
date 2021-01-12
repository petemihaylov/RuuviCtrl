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
    public class AssetRepositoryTests
    {
        private readonly DbContextOptions<AppDbContext> _dbContextOptions;
        public AssetRepositoryTests()
        {
            var databaseName = Guid.NewGuid().ToString();

            _dbContextOptions = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName)
                .EnableSensitiveDataLogging()
                .Options;
        }

        [Fact]
        public async Task AddAssetAsync()
        {
            await using (var context = new AppDbContext(_dbContextOptions))
            {
                var assetRepository = new EfRepository(context);

                //Generate random new asset
                var asset = AssetMock.GenerateRandomAsset(0);

                //Add new asset
                await assetRepository.AddAsync(asset);

                //Get new asset
                var newAsset = await context.Assets.Where(x => x.Id == asset.Id).SingleAsync();

                //Assert new asset
                newAsset.Should().BeEquivalentTo(asset, options => options.Excluding(o => o.Id));
            }
        }

        [Fact]
        public async Task GetAssetAsync()
        {
            await using (var context = new AppDbContext(_dbContextOptions))
            {
                var assetRepository = new EfRepository(context);
                //Generate random new asset
                var asset = AssetMock.GenerateRandomAsset(1);

                //Add new asset
                await assetRepository.AddAsync(asset);

                //Get new asset
                var newAsset = await assetRepository.GetByIdAsync<Asset>(asset.Id);

                //Assert new channel
                newAsset.Should().BeEquivalentTo(asset, options => options.Excluding(o => o.Id)
                    .Excluding(o => o.AssetSlaAgreements)
                    .Excluding(o => o.Breaches));
            }
        }

        [Fact]
        public async Task DeleteAssetAsync()
        {
            await using (var context = new AppDbContext(_dbContextOptions))
            {
                var assetRepository = new EfRepository(context);

                //Generate random new asset
                var asset = AssetMock.GenerateRandomAsset(2);

                //Add new asset
                await assetRepository.AddAsync(asset);

                //Get new asset
                var newAsset = await context.Assets.Where(x => x.Id == asset.Id).SingleAsync();

                //Assert new asset
                newAsset.Should().BeEquivalentTo(asset, options => options.Excluding(o => o.Id)
                    .Excluding(o => o.AssetSlaAgreements)
                    .Excluding(o => o.Breaches));

                ////Delete asset
                await assetRepository.DeleteAsync(newAsset);

                ////Get deleted asset
                var deletedAsset = await context.Assets.Where(x => x.Id == asset.Id).AsNoTracking().SingleOrDefaultAsync();

                //Assert that it does not exist
                deletedAsset.Should().BeNull();
            }
        }

        [Fact]
        public async Task UpdateAssetAsync()
        {
            await using (var context = new AppDbContext(_dbContextOptions))
            {
                var assetRepository = new EfRepository(context);

                //Generate random new asset
                var asset = AssetMock.GenerateRandomAsset(3);

                //Add new asset
                await assetRepository.AddAsync(asset);

                //Get new asset
                var newAsset = await context.Assets.Where(x => x.Id == asset.Id).SingleAsync();

                //Assert new asset
                newAsset.Should().BeEquivalentTo(asset, options => options.Excluding(o => o.Id)
                    .Excluding(o => o.AssetSlaAgreements)
                    .Excluding(o => o.Breaches));

                //Detached the added asset
                context.Entry(newAsset).State = EntityState.Detached;

                //Generete new asset with added item id
                var updatedAsset = AssetMock.GenerateRandomAsset(newAsset.Id);

                //Update asset
                await assetRepository.UpdateAsync(updatedAsset);

                //Get updated asset
                var updatedAssetEntity = await context.Assets.Where(x => x.Id == updatedAsset.Id).SingleAsync();

                //Assert updated channel
                updatedAssetEntity.Should().BeEquivalentTo(updatedAsset);
            }
        }
    }
}
