using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RuuviCTRL.Core.Interfaces;
using RuuviCTRL.Infrastructure.Data.EntityFramework;
using RuuviCTRL.Infrastructure.Data.MongoDB;
using RuuviCTRL.Infrastructure.Settings;
using RuuviCTRL.Infrastructure.Settings.Interfaces;
using RuuviCTRL.SharedKernel.Interfaces;

namespace RuuviCTRL.Infrastructure
{
    public static class StartupSetup
    {
        public static void AddDbContext(this IServiceCollection services, string connectionString)
        {

            services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(connectionString)); // will be created in web project root

            services.AddScoped(typeof(IEFRepository), typeof(EfRepository));
            services.AddScoped(typeof(IAssetSlaRepository), typeof(AssetSlaRepository));
        }

        public static void AddMongoDb(this IServiceCollection services, IConfiguration configuration)
        {
            var mongoDbSettings = new MongoDbSettings();
            configuration.GetSection("MongoDbSettings").Bind(mongoDbSettings);

            services.AddSingleton<IMongoDbSettings>(mongoDbSettings);

            services.AddScoped(typeof(IMongoRepository<>), typeof(MongoRepository<>));

        }
    }
}
