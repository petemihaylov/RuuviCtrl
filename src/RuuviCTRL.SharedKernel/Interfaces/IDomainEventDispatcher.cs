using RuuviTest.SharedKernel.Base;
using System.Threading.Tasks;

namespace RuuviTest.SharedKernel.Interfaces
{
    public interface IDomainEventDispatcher
    {
        Task Dispatch(BaseDomainEvent domainEvent);
    }
}