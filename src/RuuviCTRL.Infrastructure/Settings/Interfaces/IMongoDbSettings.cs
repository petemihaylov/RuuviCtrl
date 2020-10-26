namespace RuuviCTRL.Infrastructure.Settings.Interfaces
{

    public interface IMongoDbSettings
    {
        string DatabaseName { get; set; }
        string ConnectionString { get; set; }
    }
}
