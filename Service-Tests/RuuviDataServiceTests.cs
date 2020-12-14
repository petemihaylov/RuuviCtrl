using Microsoft.VisualStudio.TestTools.UnitTesting;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Services;
using Service_Tests.Factory;
using System;
using System.Collections.Generic;
using System.Text;

namespace Service_Tests
{
	[TestClass]
	class RuuviDataServiceTests
	{
		RuuviData data;
		RuuviDataService service;
		DataFactory factory;

		[ClassInitialize]
		public void init()
		{
			factory = new DataFactory();
			data = new RuuviData();

			data.DeviceId = "12102374";
			data.BatteryLevel = 78;
			data.GpsAccuracy = 1;
			data.Latitude = 100;
			data.Longitude = 100;
			data.AccelX = 20;
			data.AccelY = 20;
			data.AccelZ = 20;
			data.Humidity = 1000;
			data.Pressure = 10;
			data.Temperature = 23;
			data.Time = DateTime.Now;

			var repo = (RuuviCTRL.SharedKernel.Interfaces.IMongoRepository<RuuviData>)factory.GetMockRepository();
			repo.InsertOne(data);
			
			service = new RuuviDataService((RuuviCTRL.SharedKernel.Interfaces.IMongoRepository<RuuviData>)factory.GetMockRepository(), factory._eFRepository, factory._assetSlaRepository);
		}

		[ClassCleanup]
		public void clean()
		{

		}

		[TestMethod]
		public void AddMeasurePointTest()
		{
			//Assign
			//Act
			var actualNotification = service.AddMeasurePoint(data);

			//Assert
			Assert.AreEqual(null, actualNotification);
		}
	}
}
