using System.Threading.Tasks;
using RuuviCTRL.SharedKernel.Base;

namespace RuuviCTRL.SharedKernel.Interfaces
{
    public interface IDomainEventDispatcher
    {
        Task Dispatch(BaseDomainEvent domainEvent);
    }
}