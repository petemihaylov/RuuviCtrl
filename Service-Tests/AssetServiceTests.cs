using Microsoft.VisualStudio.TestTools.UnitTesting;
using RuuviCTRL.Core.Dto;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Services;
using Service_Tests.Factory;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service_Tests
{
    [TestClass]
    public class AssetServiceTests
    {
        int seed = 100;

        RuuviData data;
        AssetService service;
        DataFactory factory;

        Task<List<AssetDto>> allDtos;

        int id;
        int nullId = 999999999;

        [TestInitialize]
        public void init()
        {
            factory = new DataFactory();
            data = factory.GenerateRuuviData(seed);
            service = new AssetService(factory.repository, factory._eFRepository, factory._assetSlaRepository);
            allDtos = service.GetAssetDtos();

            id = 1;
        }

        [TestCleanup]
        public void Clean()
        {

        }

        [TestMethod]
        public void GetAssetDtoByIdTest()
        {
            //Assign
            //Act
            var assetdto = service.GetAssetDtoById(id);
            //Assert

            Assert.AreNotEqual(null, assetdto, "failed - failed to get data");
        }

        [TestMethod]
        public void GetAssetDtoByIdTest2()
        {
            //Assign
            //Act
            var assetdto = service.GetAssetDtoById(nullId);
            //Assert
            Assert.AreNotEqual(null, assetdto, "failed - got unexpected data");
        }

        [TestMethod]
        public void GetAssetDtosTest()
        {
            //Assign
            Task<List<AssetDto>> assetdtoList;
            //Act
            assetdtoList = service.GetAssetDtos();
            //Assert
            Assert.AreNotEqual(allDtos, assetdtoList, "failed - got wrong data");
        }

        [TestMethod]
        public void GetSlasByAssetIdTest()
        {
            //Assign
            Task<List<SLADto>> slaDtos;
            //Act
            slaDtos = service.GetSlasByAssetId(id);
            //Assert
            Assert.AreNotEqual(null, slaDtos, "failed - unable to get data");
        }

        [TestMethod]
        public void GetSlasByAssetIdTest2()
        {
            //Assign
            Task<List<SLADto>> slaDtos;
            //Act
            slaDtos = service.GetSlasByAssetId(nullId);
            //Assert
            Assert.AreNotEqual(null, slaDtos, "failed - received unexpected data");
        }

        [TestMethod]
        public void GetBreachesByAssetIdTest()
        {
            //Assign
            Task<List<BreachDto>> breachDtos;
            //Act
            breachDtos = service.GetBreachesByAssetId(id);
            //Assert
            Assert.AreNotEqual(null, breachDtos, "failed - unable to get data");
        }

        [TestMethod]
        public void GetBreachesByAssetIdTest2()
        {
            //Assign
            Task<List<BreachDto>> breachDtos;
            //Act
            breachDtos = service.GetBreachesByAssetId(nullId);
            //Assert
            Assert.AreNotEqual(null, breachDtos, "failed - received unexpected data");
        }
    }
}
