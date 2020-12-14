using Moq;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Interfaces;
using RuuviCTRL.SharedKernel.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Service_Tests.Factory
{
	public class DataFactory
	{
		public IEFRepository _eFRepository;
		public IAssetSlaRepository _assetSlaRepository;

		public object GetMockRepository()
		{
			var mockRepo = new Mock<IMongoRepository<RuuviData>>();
			var mockDbContext = new Mock<RuuviData>();
			
			mockDbContext.Setup(db => db).Returns((RuuviData)mockRepo.Object);

			return mockDbContext;
		}
	}
}
