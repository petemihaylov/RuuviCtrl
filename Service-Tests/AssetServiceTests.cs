using Microsoft.VisualStudio.TestTools.UnitTesting;
using RuuviCTRL.Core.Dto;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Services;
using Service_Tests.Factory;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Service_Tests
{ 
	[TestClass]
	class AssetServiceTests
	{
		RuuviData data;
		AssetService service;
		DataFactory factory;

		Task<List<AssetDto>> allDtos;

		int testId = 1;
		int inPossibleId = 999999;

		[ClassInitialize]
		public void init()
		{
			factory = new DataFactory();
			
			//adding data to mongodb
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

			service = new AssetService((RuuviCTRL.SharedKernel.Interfaces.IMongoRepository<RuuviData>)factory.GetMockRepository(), factory._eFRepository, factory._assetSlaRepository);

			allDtos = service.GetAssetDtos();
		}

		[ClassCleanup]
		public void clean()
		{

		}

		[TestMethod]
		public void GetAssetDtoByIdTest()
		{
			//Assign
			Task<AssetDto> assetdto;

			//Act
			assetdto = service.GetAssetDtoById(testId);
			//Assert

			Assert.AreNotEqual(null, assetdto, "failed - failed to get data");
		}

		[TestMethod]
		public void GetAssetDtoByIdTest2()
		{
			//Assign
			Task<AssetDto> assetdto;
			//Act
			assetdto = service.GetAssetDtoById(inPossibleId);
			//Assert
			Assert.AreEqual(null, assetdto, "failed - got unexpected data");
		}

		[TestMethod]
		public void GetAssetDtosTest()
		{
			//Assign
			Task<List<AssetDto>> assetdtoList;
			//Act
			assetdtoList = service.GetAssetDtos();
			//Assert
			Assert.AreEqual(allDtos, assetdtoList, "failed - got wrong data");
		}

		[TestMethod]
		public void GetSlasByAssetIdTest()
		{
			//Assign
			Task<List<SLADto>> slaDtos;
			//Act
			slaDtos = service.GetSlasByAssetId(testId);
			//Assert
			Assert.AreNotEqual(null, slaDtos, "failed - unable to get data");
		}

		[TestMethod]
		public void GetSlasByAssetIdTest2()
		{
			//Assign
			Task<List<SLADto>> slaDtos;
			//Act
			slaDtos = service.GetSlasByAssetId(inPossibleId);
			//Assert
			Assert.AreEqual(null, slaDtos, "failed - received unexpected data");
		}

		[TestMethod]
		public void GetBreachesByAssetIdTest()
		{
			//Assign
			Task<List<BreachDto>> breachDtos;
			//Act
			breachDtos = service.GetBreachesByAssetId(testId);
			//Assert
			Assert.AreEqual(null, breachDtos, "failed - unable to get data");
		}

		[TestMethod]
		public void GetBreachesByAssetIdTest2()
		{
			//Assign
			Task<List<BreachDto>> breachDtos;
			//Act
			breachDtos = service.GetBreachesByAssetId(inPossibleId);
			//Assert
			Assert.AreEqual(null, breachDtos, "failed - received unexpected data");
		}
	}
}
