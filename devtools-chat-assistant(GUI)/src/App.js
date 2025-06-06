import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBox from './components/ChatBox';
import HomePage from './components/HomePage'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '0', fontFamily: 'Arial' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chatbox" element={<ChatBox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
