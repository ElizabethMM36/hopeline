// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Chatroom from './components/Chatroom';
import SupportLocator from './components/SupportLocator';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <h1>🌿 Hopeline</h1>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/chat" element={<Chatroom />} />
        </Routes>

        {/* Always show at the bottom of every page */}
        <SupportLocator />
      </div>
    </Router>
  );
}

export default App;
