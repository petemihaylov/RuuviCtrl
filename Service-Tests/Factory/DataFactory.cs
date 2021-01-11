using Moq;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Interfaces;
using RuuviCTRL.SharedKernel.Interfaces;
using System;

namespace Service_Tests.Factory
{
    public class DataFactory
    {
        public IEFRepository _eFRepository;
        public IAssetSlaRepository _assetSlaRepository;
        public IMongoRepository<RuuviData> repository;

        public IMongoRepository<RuuviData> GetMockRepository()
        {
            var mockRepo = new Mock<IMongoRepository<RuuviData>>();
            var mockDbContext = new Mock<RuuviData>();

            mockDbContext.Setup(db => db).Returns((RuuviData)mockRepo.Object);

            repository = (IMongoRepository<RuuviData>)mockRepo;

            return repository;
        }

        public RuuviData GenerateRuuviData(int seed)
        {
            Random r = new Random(seed);
            RuuviData data = new RuuviData();

            data.DeviceId = "1";
            data.BatteryLevel = r.Next(1, 100);
            data.GpsAccuracy = 1;
            data.Latitude = r.Next(100, 1000);
            data.Longitude = r.Next(100, 1000);
            data.AccelX = r.Next(1, 50);
            data.AccelY = r.Next(1, 50);
            data.AccelZ = r.Next(1, 50);
            data.Humidity = r.Next(0, 1000);
            data.Pressure = r.Next(0, 20);
            data.Temperature = r.Next(-10, 40);
            data.Time = DateTime.Now;

            return data;
        }
    }
}
