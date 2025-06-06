import React, { useState, useEffect } from "react";
import { askChatBot } from "../services/api";

const ChatBox = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [copied, setCopied] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedSessionId = localStorage.getItem("sessionId");
    if (storedSessionId) {
      setSessionId(storedSessionId);
    } else {
      const newSessionId = crypto.randomUUID();
      localStorage.setItem("sessionId", newSessionId);
      setSessionId(newSessionId);
    }
  }, []);

  const handleSend = async () => {
    if (!query.trim()) return;
    const userMessage = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);
    setQuery("");

    try {
      const response = await askChatBot(query, sessionId);
      const botMessage = { sender: "bot", text: response.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API Error:", error);
      const errorMessage = {
        sender: "bot",
        text: "Error communicating with the bot.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const styles = {
    container: {
      position: "relative",
      minHeight: "100vh",
      padding: "20px",
      boxSizing: "border-box",
      background: darkMode
        ? "linear-gradient(135deg, #0D0D1F, #1e1e2f)"
        : "linear-gradient(90deg, #8332E9, #007BFF)",
      color: darkMode ? "#fff" : "#000",
      fontFamily: "Segoe UI, sans-serif",
      transition: "all 0.4s ease",
    },
    contentBox: {
      maxWidth: "900px",
      margin: "0 auto",
      background: darkMode
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(255, 255, 255, 0.15)",
      padding: "40px 30px",
      borderRadius: "20px",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: darkMode
        ? "1px solid rgba(255, 255, 255, 0.15)"
        : "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: darkMode
        ? "0 10px 50px rgba(0,0,0,0.5)"
        : "0 10px 50px rgba(0,0,0,0.1)",
    },
    chatArea: {
      height: "300px",
      overflowY: "auto",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "20px",
      backgroundColor : "white",
  background: "#ffffff", // solid white, always
  color: "#000000",       // black text, always
    },
    message: {
      marginBottom: "15px",
      textAlign: "left",
    },
    userMsg: {
      textAlign: "right",
    },
    inputGroup: {
      display: "flex",
      alignItems: "center",
    },
    input: {
      flex: 1,
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      outline: "none",
    },
    sendButton: {
      marginLeft: "10px",
      padding: "12px 20px",
      backgroundColor: darkMode ? "#5A9BFF" : "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
    toggleDarkMode: {
      position: "fixed",
      top: 20,
      right: 20,
      background: darkMode ? "#282A36" : "#ffffff",
      border: "2px solid #007BFF",
      borderRadius: "20px",
      padding: "6px 14px",
      color: darkMode ? "#ffffff" : "#007BFF",
      fontWeight: 600,
      cursor: "pointer",
      zIndex: 3,
    },
    footer: {
      textAlign: "center",
      marginTop: "40px",
      fontSize: "14px",
      color:"#ffffff", // solid white, always
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.toggleDarkMode} onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div style={styles.contentBox}>
        <div style={styles.chatArea}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                ...styles.message,
                ...(msg.sender === "user" ? styles.userMsg : {}),
              }}
            >
              <p>
                <strong>{msg.sender}:</strong> {msg.text}
              </p>
              {msg.sender === "bot" && (
                <button
                  onClick={() => handleCopy(msg.text)}
                  style={{
                    marginTop: "5px",
                    fontSize: "0.85rem",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "#5A9BFF",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Copy
                </button>
              )}
            </div>
          ))}
        </div>

        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Say Hi to start..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            style={styles.input}
          />
          <button style={styles.sendButton} onClick={handleSend}>
            Ask
          </button>
        </div>

        {copied && (
          <p style={{ color: "lightgreen", marginTop: "10px" }}>Copied!</p>
        )}
      </div>

      <div style={styles.footer}>
        Made by Krishna Verma — DevHelper
      </div>
    </div>
  );
};

export default ChatBox;
