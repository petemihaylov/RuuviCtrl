using RuuviCTRL.SharedKernel.Base;
using System.Threading.Tasks;

namespace RuuviCTRL.SharedKernel.Interfaces
{
    public interface IHandle<in T> where T : BaseDomainEvent
    {
        Task Handle(T domainEvent);
    }
}