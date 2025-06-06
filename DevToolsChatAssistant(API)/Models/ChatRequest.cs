namespace DevToolsChatAssistant.Models
{
    public class ChatRequest
    {
        public string Prompt { get; set; }
        public string SessionId { get; set; }
    }

    public class MistralSettings
    {
        public string ApiKey { get; set; }
        public string ApiUrl { get; set; }
        public string Model { get; set; }
    }

    public class Message
    {
        public string role { get; set; }
        public string content { get; set; }
    }


}
