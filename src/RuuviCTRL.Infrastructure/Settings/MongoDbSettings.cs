using RuuviTest.Infrastructure.Settings.Interfaces;

namespace RuuviTest.Infrastructure.Settings
{
    public class MongoDbSettings : IMongoDbSettings
    {
        public string DatabaseName { get; set; }
        public string ConnectionString { get; set; }
    }
}
