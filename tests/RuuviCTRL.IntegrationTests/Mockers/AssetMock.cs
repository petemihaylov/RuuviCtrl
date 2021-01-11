using Bogus;
using RuuviCTRL.Core.Entities;

namespace RuuviCTRL.IntegrationTests.Mockers
{
    public static class AssetMock
    {
        public static Faker<Asset> GetAssetFaker(int id)
        {
            var fakerAsset = new Faker<Asset>()
                .RuleFor(o => o.Id, id)
                .RuleFor(o => o.Name, f => f.Company.CompanyName())
                .RuleFor(o => o.DeviceId, f => f.Random.Guid().ToString());

            return fakerAsset;
        }

        public static Asset GenerateRandomAsset(int id)
        {
            var asset = GetAssetFaker(id).Generate();

            return asset;
        }
    }
}
