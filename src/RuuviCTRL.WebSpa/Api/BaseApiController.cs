using Microsoft.AspNetCore.Mvc;

namespace RuuviCTRL.WebSpa.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseApiController : Controller
    {
    }
}
