using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.SharedKernel.Interfaces;
using RuuviCTRL.StorageApi.Hubs;
using Microsoft.AspNetCore.SignalR;


namespace RuuviCTRL.StorageApi.Api
{
    public class NotificationsController : BaseApiController
    {
        private readonly IEFRepository _repository;
        private readonly IHubContext<LiveNotificationHub> _hubContext;

        public NotificationsController(IEFRepository repository, IHubContext<LiveNotificationHub> hubContext)
        {
            this._repository = repository;
            this._hubContext = hubContext;
        }

        // GET: api/notifications
        [HttpGet]
        public async Task<IActionResult> GetNotifications()
        {
            var notifications = await _repository.ListAsync<Notification>();

            return Ok(notifications);
        }

        //GET api/notifications/{id}
        [HttpGet("{id}", Name = "GetNotificationById")]
        public async Task<ActionResult<Notification>> GetNotificationById(int id)
        {
            var notificationItem = await _repository.GetByIdAsync<Notification>(id);
            if (notificationItem != null)
            {
                return Ok(notificationItem);
            }
            return NotFound();
        }

        // POST: api/notifications
        [HttpPost]
        public async Task<IActionResult> Uplink(Notification message)
        {
            var notificationItem = await _repository.AddAsync(message);

            // SignalR event
            await _hubContext.Clients.All.SendAsync("GetNewNotification", notificationItem);

            return Ok();
           // return CreatedAtRoute(nameof(GetNotificationById), new { id = notificationItem.Id }, notificationItem);
        }

        // Delete: api/notifications/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var notificationItem = _repository.GetByIdAsync<Notification>(id).Result;
            if (notificationItem == null)
            {
                return NotFound();
            }

            await _repository.DeleteAsync<Notification>(notificationItem);
            return NoContent();

        }
    }
}