using Microsoft.EntityFrameworkCore;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.Core.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RuuviCTRL.Infrastructure.Data.EntityFramework
{
    public class AssetSlaRepository : IAssetSlaRepository
    {
        private readonly AppDbContext _dbContext;

        public AssetSlaRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<List<Asset>> AssetListBySlaAsync(int slaId)
        {
            return _dbContext.Set<AssetSLAAgreement>().Include(c => c.Asset).Where(id => id.SlaAgreementId == slaId).Select(a => a.Asset).ToListAsync();
        }

        public Task<List<SLAAgreement>> SlaListByAssetAsync(int assetId)
        {
            return _dbContext.Set<AssetSLAAgreement>().Include(c => c.SlaAgreement).Where(id => id.AssetId == assetId).Select(a => a.SlaAgreement).ToListAsync();
        }

        public async Task<AssetSLAAgreement> AddAsync(AssetSLAAgreement entity)
        {
            await _dbContext.Set<AssetSLAAgreement>().AddAsync(entity);
            await _dbContext.SaveChangesAsync();

            return entity;
        }

        public async Task DeleteAsync(AssetSLAAgreement entity)
        {
            _dbContext.Set<AssetSLAAgreement>().Remove(entity);
            await _dbContext.SaveChangesAsync();
        }
    }
}
