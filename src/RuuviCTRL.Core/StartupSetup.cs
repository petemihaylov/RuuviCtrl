using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using RuuviTest.Core.Services;
using RuuviTest.Core.Services.Interfaces;

namespace RuuviTest.Core
{
    public static class StartupSetup
    {
        public static void AddServices(this IServiceCollection services)
        {
            services.AddTransient<IAssetService, AssetService>();
        }
    }
}
