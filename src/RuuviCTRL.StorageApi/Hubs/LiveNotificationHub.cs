using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using RuuviCTRL.Core.Entities;

namespace RuuviCTRL.StorageApi.Hubs
{
    public class LiveNotificationHub : Hub
    {
        public Task GetNewNotification(Notification value)
        {
            return Clients.All.SendAsync("GetNewNotification", value);
        }
    }
}
