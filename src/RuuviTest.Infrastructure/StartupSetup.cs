using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RuuviTest.Infrastructure.Data.EntityFramework;
using RuuviTest.Infrastructure.Data.MongoDB;
using RuuviTest.Infrastructure.Settings;
using RuuviTest.Infrastructure.Settings.Interfaces;
using RuuviTest.SharedKernel.Interfaces;

namespace RuuviTest.Infrastructure
{
    public static class StartupSetup
    {
        public static void AddDbContext(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(connectionString)); // will be created in web project root
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
