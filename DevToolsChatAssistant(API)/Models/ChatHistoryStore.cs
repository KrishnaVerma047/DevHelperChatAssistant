namespace DevToolsChatAssistant.Models
{
    public class ChatHistoryStore
    {
        private readonly Dictionary<string, List<Message>> _sessions = new();

        public void AddMessage(string sessionId, Message message)
        {
            if (!_sessions.ContainsKey(sessionId))
                _sessions[sessionId] = new List<Message>();

            _sessions[sessionId].Add(message);
        }

        public List<Message> GetMessages(string sessionId)
        {
            if (_sessions.TryGetValue(sessionId, out var messages))
                return messages;
            return new List<Message>();
        }

        public void ClearSession(string sessionId)
        {
            _sessions.Remove(sessionId);
        }
    }

}
