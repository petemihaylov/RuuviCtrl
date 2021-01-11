using Microsoft.AspNetCore.Mvc;
using RuuviCTRL.Core.Entities;
using RuuviCTRL.SharedKernel.Interfaces;
using System.Threading.Tasks;

namespace RuuviCTRL.WebSpa.Api
{
    public class NotificationsController : BaseApiController
    {
        private readonly IEFRepository _repository;

        public NotificationsController(IEFRepository repository)
        {
            this._repository = repository;
        }

        // GET: api/notifications
        [HttpGet]
        public async Task<IActionResult> GetNotifications()
        {
            var notifications = await _repository.ListAsync<Notification>();

            return Ok(notifications);
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

            await _repository.DeleteAsync(notificationItem);
            return NoContent();

        }
    }
}