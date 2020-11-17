using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RuuviCTRL.SharedKernel.Base;
using RuuviCTRL.SharedKernel.Interfaces;

namespace RuuviCTRL.Infrastructure.Data.EntityFramework
{
    public class EfRepository : IEFRepository
    {
        private readonly AppDbContext _dbContext;

        public EfRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        public T GetById<T>(int id) where T : BaseEntity
        {
            return _dbContext.Set<T>().SingleOrDefault(e => e.Id == id);
        }        
        public Task<T> FindAsync<T>(Expression<Func<T, bool>> filter = null) where T : BaseEntity
        {
            return _dbContext.Set<T>().SingleOrDefaultAsync(filter ?? (s => true));
        }

        public Task<List<T>> WhereToListAsync<T>(Expression<Func<T, bool>> filter = null) where T : BaseEntity
        {
            return _dbContext.Set<T>().Where(filter ?? (s => true)).ToListAsync();
        }
        public Task<int> CountAsync<T>(Expression<Func<T, bool>> filter = null) where T : BaseEntity
        {
            return _dbContext.Set<T>().CountAsync(filter ?? (s => true));
        }
        public Task<T> LastAsync<T, TKey>(Expression<Func<T, bool>> filter, Expression<Func<T, TKey>> orderBy) where T : BaseEntity
        {
            return _dbContext.Set<T>().Where(filter ?? (s => true)).OrderByDescending(orderBy).FirstOrDefaultAsync();
        }
        public Task<T> GetByIdAsync<T>(int id) where T : BaseEntity
        {
            return _dbContext.Set<T>().SingleOrDefaultAsync(e => e.Id == id);
        }
        public Task<List<T>> ListAsync<T>() where T : BaseEntity
        {
            return  _dbContext.Set<T>().ToListAsync();
        }
        public async Task<T> AddAsync<T>(T entity) where T : BaseEntity
        {
            await _dbContext.Set<T>().AddAsync(entity);
            await _dbContext.SaveChangesAsync();

            return entity;
        }

        public async Task UpdateAsync<T>(T entity) where T : BaseEntity
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync<T>(T entity) where T : BaseEntity
        {
            _dbContext.Set<T>().Remove(entity);
            await _dbContext.SaveChangesAsync();
        }
    }
}
