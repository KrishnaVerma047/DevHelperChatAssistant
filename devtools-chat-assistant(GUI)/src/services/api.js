import axios from 'axios';

const API_BASE = 'https://localhost:7177/api';

export const askChatBot = async (prompt, sessionId) => {
  const res = await axios.post(`${API_BASE}/Chat/ask`, {
    prompt,
    sessionId
  });
  return res.data;
};
