using Microsoft.VisualStudio.TestTools.UnitTesting;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Services;
using Service_Tests.Factory;
using System.Threading.Tasks;

namespace Service_Tests
{
	[TestClass]
	public class SLAServiceTests
	{
		int id;
		int nullId = 999999999;

		DataFactory factory;
		SLAService service;

		[TestInitialize]
		public void init()
		{
			id = 1;

			factory = new DataFactory();
			service = new SLAService(factory._eFRepository, factory._assetSlaRepository);
		}

		[TestCleanup]
		public void Clean()
		{
			
		}

		[TestMethod]
		public void GetSLADtoByIdTest()
		{
			//Assign
			//Act
			var slaEntity = service.GetSLADtoById(id);

			//Assert
			Assert.AreNotEqual(null, slaEntity, "failed - unable to receive data.");
		}

		[TestMethod]
		public void GetSLADtoByIdNullTest()
		{
			//Assign
			//Act
			var slaEntity = service.GetSLADtoById(nullId);

			//Assert
			Assert.AreNotEqual(null, slaEntity, "failed - received data.");
		}

		[TestMethod]
		public void GetAssetsForSlaNullTest()
		{
			//Assign
			//Act
			var actualdata = service.GetAssetsForSla(nullId);
			
			//Assert
			Assert.AreNotEqual(null, actualdata, "failed - received data.");
		}

		[TestMethod]
		public void GetAssetsForSlaTest()
		{
			//Assign
			//Act
			var actualdata = service.GetAssetsForSla(id);

			//Assert
			Assert.AreNotEqual(null,actualdata, "failed - failed to received data.");
		}

		[TestMethod]
		public void AddAssetToSlaTest()
		{
			//Assign
			Task<AssetSLAAgreement> expected = service.AddAssetToSla(nullId,nullId);
			//Act
			var actualdata = service.AddAssetToSla(nullId, nullId);
			//Assert
			Assert.AreNotEqual(expected, actualdata, "failed - received data");
		}
		
		[TestMethod]
		public void GetSLADtosTest()
		{
			//Assign
			//Act
			var actualdata = service.GetSLADtos();
			//Assert
			Assert.AreNotEqual(null, actualdata, "failed - failed to receive data");
		}
	}
}
