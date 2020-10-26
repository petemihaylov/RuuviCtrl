using Microsoft.AspNetCore.Mvc;

namespace RuuviCTRL.StorageApi.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseApiController : Controller
    {
    }
}
