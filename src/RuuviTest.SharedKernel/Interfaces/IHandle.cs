using RuuviTest.SharedKernel.Base;
using System.Threading.Tasks;

namespace RuuviTest.SharedKernel.Interfaces
{
    public interface IHandle<in T> where T : BaseDomainEvent
    {
        Task Handle(T domainEvent);
    }
}