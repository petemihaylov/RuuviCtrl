using RuuviCTRL.SharedKernel.Base;
using System.Threading.Tasks;

namespace RuuviCTRL.SharedKernel.Interfaces
{
    public interface IDomainEventDispatcher
    {
        Task Dispatch(BaseDomainEvent domainEvent);
    }
}