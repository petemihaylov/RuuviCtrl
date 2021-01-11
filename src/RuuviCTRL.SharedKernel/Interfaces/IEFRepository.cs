using RuuviCTRL.SharedKernel.Base;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RuuviCTRL.SharedKernel.Interfaces
{
    public interface IEFRepository
    {
        Task<T> GetByIdAsync<T>(int id) where T : BaseEntity;
        Task<T> FindAsync<T>(Expression<Func<T, bool>> filter = null) where T : BaseEntity;
        Task<List<T>> WhereToListAsync<T>(Expression<Func<T, bool>> filter = null) where T : BaseEntity;
        Task<int> CountAsync<T>(Expression<Func<T, bool>> filter = null) where T : BaseEntity;
        Task<T> LastAsync<T, TKey>(Expression<Func<T, bool>> filter, Expression<Func<T, TKey>> orderBy)
            where T : BaseEntity;

        Task<List<T>> ListAsync<T>() where T : BaseEntity;
        Task<T> AddAsync<T>(T entity) where T : BaseEntity;
        Task UpdateAsync<T>(T entity) where T : BaseEntity;
        Task DeleteAsync<T>(T entity) where T : BaseEntity;
    }
}