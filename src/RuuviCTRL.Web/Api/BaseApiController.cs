using Microsoft.AspNetCore.Mvc;

namespace RuuviTest.Web.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseApiController : Controller
    {
    }
}
