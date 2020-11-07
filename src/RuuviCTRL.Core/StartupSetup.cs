using Microsoft.Extensions.DependencyInjection;
using RuuviCTRL.Core.Services;
using RuuviCTRL.Core.Services.Interfaces;

namespace RuuviCTRL.Core
{
    public static class StartupSetup
    {
        public static void AddServices(this IServiceCollection services)
        {
            services.AddTransient<IAssetService, AssetService>();
            services.AddTransient<ISLAService, SLAService>();
            services.AddTransient<IRuuviDataService, RuuviDataService>();
        }
    }
}
