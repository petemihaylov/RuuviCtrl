using Microsoft.AspNetCore.Mvc;

namespace RuuviTest.WebSpa.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseApiController : Controller
    {
    }
}
