using System.Threading.Tasks;
using RuuviCTRL.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using RuuviCTRL.StorageApi.Hubs;
using Microsoft.AspNetCore.SignalR;
using RuuviCTRL.SharedKernel.Interfaces;


namespace RuuviCTRL.StorageApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private readonly IEFRepository _repository;
        private readonly IHubContext<LiveNotificationHub> _hubContext;

        public NotificationController(IEFRepository repository, IHubContext<LiveNotificationHub> hubContext)
        {
            this._repository = repository;
            this._hubContext = hubContext;
        }


        // GET: api/notification
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
        public async Task<IActionResult> PostAssets([FromBody]Notification message)
        {
            var notificationItem = await _repository.AddAsync(message);

            // SignalR event
            await _hubContext.Clients.All.SendAsync("GetNewNotification", notificationItem);

            return CreatedAtRoute(nameof(GetNotificationById), new { id = notificationItem.Id }, notificationItem);
        }
    }
}