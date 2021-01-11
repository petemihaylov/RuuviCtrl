using Microsoft.AspNetCore.SignalR;
using RuuviCTRL.Core.Entities;
using System.Threading.Tasks;

namespace RuuviCTRL.StorageApi.Hubs
{
    public class LiveNotificationHub : Hub
    {
        public Task GetNewNotification(Notification value)
        {
            return Clients.All.SendAsync("Notification", value);
        }
    }
}
