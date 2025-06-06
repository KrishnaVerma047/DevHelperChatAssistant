import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleNavigate = () => {
    navigate("/chatbox");
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const styles = {
    maskGroup: {
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      overflow: "hidden",
      background: darkMode
        ? "linear-gradient(135deg, #0D0D1F, #1e1e2f)"
        : "linear-gradient(90deg, #8332E9, #007BFF)",
      transition: "background 0.5s ease",
      fontFamily: "Segoe UI, sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "20px",
      boxSizing: "border-box",
    },
    rectangle: {
      width: "100%",
      maxWidth: "1240px",
      height: "auto",
      padding: "40px 20px",
      background: darkMode
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(255, 255, 255, 0.15)",
      borderRadius: "20px",
      zIndex: 1,
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: darkMode
        ? "1px solid rgba(255, 255, 255, 0.15)"
        : "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: darkMode
        ? "0 10px 50px rgba(0,0,0,0.5)"
        : "0 10px 50px rgba(0,0,0,0.1)",
      position: "relative",
    },
    group3: {
      position: "absolute",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      top: 0,
      left: 0,
      zIndex: 0,
    },
    ellipse: (size, left, top, color, animation) => ({
      position: "absolute",
      width: size,
      height: size,
      left,
      top,
      background: color,
      borderRadius: "50%",
      opacity: 0.3,
      animation: animation ? `${animation} 12s infinite alternate` : undefined,
    }),
    contentCenter: {
      position: "relative",
      zIndex: 2,
      textAlign: "center",
      color: darkMode ? "#FFFFFF" : "#000000",
      padding: "20px",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "20px",
      background: "linear-gradient(90deg, #ffffff, #cccccc)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    description: {
      fontSize: "1.125rem",
      marginBottom: "30px",
      color: darkMode ? "#CCCCCC" : "#333333",
      maxWidth: "600px",
      marginInline: "auto",
      lineHeight: "1.7",
    },
    button: {
      padding: "12px 28px",
      backgroundColor: darkMode ? "#5A9BFF" : "#007BFF",
      border: "none",
      borderRadius: "8px",
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
    toggleDarkMode: {
      position: "fixed",
      top: 20,
      right: 20,
      zIndex: 3,
      background: darkMode ? "#282A36" : "#FFFFFF",
      border: "2px solid #007BFF",
      borderRadius: "20px",
      padding: "6px 14px",
      color: darkMode ? "#FFFFFF" : "#007BFF",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    footer: {
      position: "relative",
      marginTop: "40px",
      fontSize: "14px",
      color: "#ffffff", // solid white, always
      zIndex: 3,
      textAlign: "center",
    },
  };

  return (
    <div style={styles.maskGroup}>
      <button style={styles.toggleDarkMode} onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div style={styles.rectangle}>
        <div style={styles.group3}>
          <div style={styles.ellipse("1031px", "124px", "-157px", "#CBC8DC", "float1")}></div>
          <div style={styles.ellipse("821px", "229px", "-52px", "#9367D8", "float2")}></div>
          <div style={styles.ellipse("596px", "341px", "60px", "#8332E9", "float1")}></div>
          <div style={styles.ellipse("358px", "461px", "180px", "#7400F9", "float2")}></div>
        </div>

        <div style={styles.contentCenter}>
          <h1 style={styles.heading}>Welcome to DevHelper</h1>
          <p style={styles.description}>
            Supercharge your dev journey. <br />
            Connect, collaborate, and chat with AI — instantly.
          </p>
          <button
            style={styles.button}
            onClick={handleNavigate}
            aria-label="Start Chatting with AI Bot"
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Start Chatting
          </button>
        </div>
      </div>

      <div style={styles.footer}>
        Made by Krishna Verma — DevHelper
      </div>

      <style>
        {`
          @keyframes float1 {
            0% { transform: translateY(0); }
            100% { transform: translateY(20px); }
          }
          @keyframes float2 {
            0% { transform: translateY(0); }
            100% { transform: translateY(-20px); }
          }

          @media screen and (max-width: 768px) {
            h1 {
              font-size: 1.75rem !important;
            }
            p {
              font-size: 1rem !important;
            }
            button {
              font-size: 0.95rem !important;
              padding: 10px 22px !important;
            }
          }

          @media screen and (max-width: 480px) {
            h1 {
              font-size: 1.5rem !important;
            }
            p {
              font-size: 0.95rem !important;
            }
            button {
              font-size: 0.85rem !important;
              padding: 8px 18px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
