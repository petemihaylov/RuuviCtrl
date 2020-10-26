using RuuviCTRL.Infrastructure.Settings.Interfaces;

namespace RuuviCTRL.Infrastructure.Settings
{
    public class MongoDbSettings : IMongoDbSettings
    {
        public string DatabaseName { get; set; }
        public string ConnectionString { get; set; }
    }
}
