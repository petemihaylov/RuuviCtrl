using System.Threading.Tasks;
using RuuviCTRL.SharedKernel.Base;

namespace RuuviCTRL.SharedKernel.Interfaces
{
    public interface IHandle<in T> where T : BaseDomainEvent
    {
        Task Handle(T domainEvent);
    }
}