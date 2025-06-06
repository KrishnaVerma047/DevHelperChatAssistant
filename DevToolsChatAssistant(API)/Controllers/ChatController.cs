using DevToolsChatAssistant.Models;
using DevToolsChatAssistant.Services;
using Microsoft.AspNetCore.Mvc;

namespace DevToolsChatAssistant.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : ControllerBase
    {
        private readonly MistralService _mistralService;

        public ChatController(MistralService mistralService)
        {
            _mistralService = mistralService;
        }

        [HttpPost("ask")]
        public async Task<IActionResult> Ask([FromBody] ChatRequest request)
        {
            // Validate prompt
            if (string.IsNullOrWhiteSpace(request.Prompt))
            {
                return BadRequest(new { error = "Prompt is required." });
            }

            // Use existing session or create new one
            var sessionId = string.IsNullOrWhiteSpace(request.SessionId)
                ? Guid.NewGuid().ToString()
                : request.SessionId;

            // Get the assistant response
            var responseText = await _mistralService.GetResponseAsync(request.Prompt, sessionId);

            // Return a structured response
            return Ok(new
            {
                sessionId = sessionId,
                timestamp = DateTime.UtcNow,
                bot = "DevHelper",
                response = responseText
            });
        }
    }
}
