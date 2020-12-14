using Microsoft.VisualStudio.TestTools.UnitTesting;
using RuuviCTRL.Core.Dto;
using RuuviCTRL.Core.Interfaces;
using RuuviCTRL.Core.Services;
using RuuviCTRL.SharedKernel.Interfaces;
using Service_Tests.Factory;

namespace Service_Tests
{
	[TestClass]
	public class SLAServiceTests
	{
		DataFactory factory;
		SLAService service;

		[ClassInitialize]
		private void Init()
		{
			factory = new DataFactory();
			service = new SLAService(factory._eFRepository, factory._assetSlaRepository);
		}

		[ClassCleanup]
		private void Teardown()
		{

		}


		[TestMethod]
		public void GetSLADtoByIdTest()
		{
			//Assign
			int id = 1;
			//Act
			var slaEntity = service.GetSLADtoById(id);

			//Assert
			Assert.AreNotEqual(slaEntity, null, "failed - unable to receive data.");
		}

		[TestMethod]
		public void GetSLADtoByIdNullTest()
		{
			//Assign
			int id = 9999;
			//Act
			var slaEntity = service.GetSLADtoById(id);

			//Assert
			Assert.AreEqual(slaEntity, null, "failed - received data.");
		}

		[TestMethod]
		public void GetAssetsForSlaNullTest()
		{
			//Assign
			int id = 999;

			//Act
			var actualdata = service.GetAssetsForSla(id);
			
			//Assert
			Assert.AreEqual(actualdata, null, "failed - received data.");
		}

		[TestMethod]
		public void GetAssetsForSlaTest()
		{
			//Assign
			int id = 1;

			//Act
			var actualdata = service.GetAssetsForSla(id);

			//Assert
			Assert.AreNotEqual(actualdata, null, "failed - failed to received data.");
		}

		[TestMethod]
		public void AddAssetToSlaTest()
		{
			//Assign
			int slaId = 999;
			int assetId = 999;
			
			//Act
			var actualdata = service.AddAssetToSla(slaId, assetId);
			//Assert
			Assert.AreEqual(actualdata, null, "failed - received data");
		}

		[TestMethod]
		public void GetSLADtosTest()
		{
			//Assign
			//Act
			var actualdata = service.GetSLADtos();
			//Assert
			Assert.AreNotEqual(actualdata, null, "failed - failed to receive data");
		}
	}
}
