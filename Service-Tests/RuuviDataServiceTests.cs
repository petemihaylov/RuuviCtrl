using Microsoft.VisualStudio.TestTools.UnitTesting;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Services;
using RuuviCTRL.SharedKernel.Interfaces;
using Service_Tests.Factory;

namespace Service_Tests
{
	[TestClass]
	public class RuuviDataServiceTests
	{
		int seed = 100;

		RuuviData data;
		RuuviDataService service;
		DataFactory factory = new DataFactory();

		[TestInitialize]
		public void init()
		{
			data = factory.GenerateRuuviData(seed);			
			service = new RuuviDataService(factory.repository, factory._eFRepository, factory._assetSlaRepository);
		}

		[TestCleanup]
		public void Clean()
		{

		}

		[TestMethod]
		public void AddMeasurePointTest()
		{
			//Assign
			//Act
			var actualNotification = service.AddMeasurePoint(data);

			//Assert
			Assert.AreNotEqual(null, actualNotification);
		}
	}
}
