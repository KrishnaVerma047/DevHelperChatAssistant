using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using DevToolsChatAssistant.Models;
using Microsoft.Extensions.Options;

namespace DevToolsChatAssistant.Services
{
    public class MistralService
    {
        private readonly HttpClient _httpClient;
        private readonly MistralSettings _settings;
        private readonly Message _systemPrompt;
        private readonly ChatHistoryStore _historyStore;

        public MistralService(HttpClient httpClient, IOptions<MistralSettings> settings, ChatHistoryStore historyStore)
        {
            _httpClient = httpClient;
            _settings = settings.Value;
            _historyStore = historyStore;
            // Load system prompt from devhelper.txt
            var promptText = File.ReadAllText(Path.Combine("Prompts", "devhelper.txt"));
            _systemPrompt = new Message
            {
                role = "system",
                content = promptText
            };
        }

        public async Task<string> GetResponseAsync(string userPrompt, string sessionId)
        {
            // Get chat history
            var history = _historyStore.GetMessages(sessionId);

            // Add the user prompt to history
            var userMessage = new Message { role = "user", content = userPrompt };
            history.Add(userMessage);

            // Prepare the full conversation
            var messages = new List<Message> { _systemPrompt };
            messages.AddRange(history);

            // Build the request object
            var requestBody = new
            {
                model = "mistral-large-latest",
                messages = messages
            };

            var requestJson = JsonSerializer.Serialize(requestBody);

            var request = new HttpRequestMessage(HttpMethod.Post, "https://api.mistral.ai/v1/chat/completions")
            {
                Content = new StringContent(requestJson, Encoding.UTF8, "application/json")
            };
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", _settings.ApiKey);
            request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            var response = await _httpClient.SendAsync(request);
            response.EnsureSuccessStatusCode();

            var responseContent = await response.Content.ReadAsStringAsync();

            using var doc = JsonDocument.Parse(responseContent);
            var content = doc.RootElement
                .GetProperty("choices")[0]
                .GetProperty("message")
                .GetProperty("content")
                .GetString();

            // Add assistant response to chat history
            _historyStore.AddMessage(sessionId, new Message { role = "assistant", content = content });

            return FormatMistralResponse(content);
        }

        private string FormatMistralResponse(string content)
        {
            // Optional: Add formatting or post-processing here
            return content;
        }
    }
}
