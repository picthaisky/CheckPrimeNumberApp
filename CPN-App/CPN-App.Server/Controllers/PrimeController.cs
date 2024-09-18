using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CPN_App.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrimeController : ControllerBase
    {
        [HttpGet("GetBy/{number}")]
        public IActionResult IsPrime(int number)
        {
            if (number <= 1) return Ok(false);
            for (int i = 2; i <= Math.Sqrt(number); i++)
            {
                if (number % i == 0) return Ok(false);
            }
            return Ok(true);
        }
    }
}
